import { FRONTEND_URL } from "$lib/shared/constants";
import { adjustDate } from "$lib/utils/date";
import { generateOTP } from "$lib/utils/server/crypto";
import { prisma } from "$lib/utils/server/prisma";
import { endpointResponse, methodResponse } from "$lib/utils/server/response-handler";
import { isEmail } from "multiform-validator";
import { sendEmailChangeAlertEmail, sendEmailVerificationEmail, sendWelcomeEmail } from "../notifications/email-service";
import { comparePasswordHash } from "$lib/utils/server/crypto";
import { getUserCountryCodeAndLanguage } from "$lib/utils/geolocation";

/**
 * Sends a verification email to the user.
 * 
 * @param {Object} options - Verification email options
 * @param {string} options.email - The email address of the user to send the email to.
 * @param {string} options.firstName - The first name of the user to send the email to.
 * @returns {Promise<{ status: boolean, message: string, code: number, data?: Object }>} - Verification email result
 */
async function sendVerificationEmail({ email, firstName }) {
    if (!email || !firstName) {
        return methodResponse(false, 400, 'Email and first name are required to send a verification email.');
    }

    const token = generateOTP({ length: 6, type: 'numeric' });
    await prisma.emailVerificationToken.deleteMany({
        where: {
            email,
        },
    });
    const verificationToken = await prisma.emailVerificationToken.create({
        data: {
            email,
            token,
            expiresAt: adjustDate([
                {
                    unit: 'minute',
                    value: 11
                },
                {
                    unit: 'second',
                    value: 59
                }
            ]),
            user: {
                connect: {
                    email,
                },
            },
        },
    });

    const verificationLink = `${FRONTEND_URL}/verify-email?token=${verificationToken.token}`;

    const { status, message, code, data } = await sendEmailVerificationEmail({
        email,
        firstName,
        verificationCode: token,
        verificationLink,
    });

    return methodResponse(status, code, message, data);
}

/**
 * Verifies a user's email using the provided token.
 * @param {{ token: string }} params - The verification token object.
 * @returns {Promise<Response>} - Verification result
 */
async function verifyEmail({ token }) {
    try {
        const verificationToken = await prisma.emailVerificationToken.findUnique({
            where: {
                token,
            },
            select: {
                id: true,
                email: true,
                expiresAt: true,
                user: {
                    select: {
                        firstName: true,
                    },
                },
            },
        });

        if (!verificationToken) {
            return endpointResponse(false, 400, 'Invalid verification token.');
        }

        if (verificationToken.expiresAt < new Date()) {
            return endpointResponse(false, 400, 'Verification token has expired.');
        }

        await prisma.user.update({
            where: {
                email: verificationToken.email,
            },
            data: {
                emailVerified: new Date(),
            },
        });

        await prisma.emailVerificationToken.delete({
            where: {
                id: verificationToken.id,
            },
        });

        await sendWelcomeEmail({ email: verificationToken.email, firstName: verificationToken.user.firstName });

        return endpointResponse(true, 200, 'Email verified successfully.');
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        return endpointResponse(false, 500, 'An error occurred during email verification.', { error: err.message });
    }
}

/**
 * Resends a verification email to the user.
 * @param {string} email - The email address of the user to send the email to.
 * @returns {Promise<Response>} - Resend verification email result
 */
async function resendVerificationEmail(email) {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            firstName: true,
            emailVerified: true,
        },
    });
    
    if (!isEmail(email)) {
        return endpointResponse(false, 400, 'Invalid email address.');
    }

    if (!user) {
        return endpointResponse(false, 400, 'User not found.');
    }


    if (user?.emailVerified) {
        return endpointResponse(false, 400, 'Email already verified.');
    }

    const { status, message, code, data } = await sendVerificationEmail({ email, firstName: user.firstName });
    return endpointResponse(status, code, message, data);
}

/**
 * Starts the email change process for a user.
 * @param {Object} options - The options for the email change.
 * @param {string} options.sessionToken - The user's session token.
 * @param {string} options.newEmail - The new email address to change to.
 * @param {string} options.password - The user's current password for verification.
 * @returns {Promise<Response>} - The response from the email change process.
 */
async function startEmailChange({ sessionToken, newEmail, password }) {
    try {
        if (!sessionToken || !newEmail || !password) {
            return endpointResponse(false, 400, 'Session token, new email, and password are required.');
        }

        // Validate email format
        if (!isEmail(newEmail)) {
            return endpointResponse(false, 400, 'Invalid email address format.');
        }

        // Get user from session token
        const session = await prisma.session.findUnique({
            where: { sessionToken },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        firstName: true,
                        hashedPassword: true
                    }
                }
            }
        });

        if (!session) {
            return endpointResponse(false, 401, 'Invalid session token.');
        }

        // Verify password
        const isPasswordValid = await comparePasswordHash(password, session.user.hashedPassword);
        if (!isPasswordValid) {
            return endpointResponse(false, 401, 'Invalid password.');
        }

        // Check if new email is already in use
        const existingUser = await prisma.user.findUnique({
            where: { email: newEmail }
        });

        if (existingUser) {
            return endpointResponse(false, 400, 'This email address is already in use.');
        }

        // Check if user already has a pending email change
        const existingChange = await prisma.emailVerificationToken.findFirst({
            where: {
                userId: session.user.id,
                expiresAt: {
                    gt: new Date()
                }
            }
        });

        if (existingChange) {
            return endpointResponse(false, 400, 'You already have a pending email change. Please check your email or wait for it to expire.');
        }

        // Create email change token
        const emailChange = await prisma.emailVerificationToken.create({
            data: {
                userId: session.user.id,
                email: newEmail,
                token: generateOTP({ type: 'numeric', length: 6 }),
                expiresAt: adjustDate([{ unit: "hour", value: 24 }]), // 24 hour expiry
            }
        });

        // Send verification email
        await sendEmailChangeVerificationEmail({
            email: newEmail,
            firstName: session.user.firstName,
            verificationCode: emailChange.token,
            currentEmail: session.user.email,
        });

        return endpointResponse(true, 200, 'Email change verification code sent successfully.');
    } catch (error) {
        console.error('Email change error:', error);
        return endpointResponse(false, 500, 'An error occurred while processing your email change request.');
    }
}

/**
 * Completes the email change process by verifying the token and updating the user's email.
 * @param {Object} options - The options for completing the email change.
 * @param {string} options.token - The verification token for the email change.
 * @param {string} options.ip - The device IP Address.
 * @param {string} options.uaString - The device UAString.
 * @returns {Promise<Response>} - The response from the email change completion process.
 */
async function completeEmailChange({ token, ip, uaString }) {
    try {
        if (!token) {
            return endpointResponse(false, 400, 'Verification token is required.');
        }

        // Find the email change token
        const emailChange = await prisma.emailVerificationToken.findUnique({
            where: { token },
            select: {
                id: true,
                email: true,
                userId: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                        firstName: true
                    }
                }
            }
        });

        if (!emailChange) {
            return endpointResponse(false, 400, 'Invalid verification token.');
        }

        if (emailChange.expiresAt < new Date()) {
            // Clean up expired token
            await prisma.emailVerificationToken.delete({
                where: { id: emailChange.id }
            });
            return endpointResponse(false, 400, 'Verification token has expired.');
        }

        // Check if the new email is already in use by another user
        const existingUser = await prisma.user.findUnique({
            where: { 
                email: emailChange.email,
                NOT: {
                    id: emailChange.userId
                }
            }
        });

        if (existingUser) {
            return endpointResponse(false, 400, 'This email address is already in use by another account.');
        }

        // Use a transaction to ensure data consistency
        await prisma.$transaction(async (/** @type {import('@prisma/client').PrismaClient} */ tx) => {
            // Update user's email
            await tx.user.update({
                where: { id: emailChange.userId },
                data: {
                    email: emailChange.email,
                    emailVerified: new Date(),
                    updatedAt: new Date()
                }
            });

            // Delete all verification tokens for this user
            await tx.emailVerificationToken.deleteMany({
                where: { userId: emailChange.userId }
            });

            // Delete all sessions for this user to force re-login
            await tx.session.deleteMany({
                where: { userId: emailChange.userId }
            });
        });

        

        const locate = await getUserCountryCodeAndLanguage(ip)

        await sendEmailChangeAlertEmail({
            firstName: emailChange.user.firstName,
            oldEmail: emailChange.user.email,
            newEmail: emailChange.email,
            createdAt: emailChange.createdAt,
            location: locate.country?.name || 'Unknown',
            uaString
        })
        

        return endpointResponse(true, 200, 'Email changed successfully. Please log in again with your new email address.');
    } catch (error) {
        console.error('Email change completion error:', error);
        return endpointResponse(false, 500, 'An error occurred while completing your email change.');
    }
}

/**
 * Sends an email change verification email to the user.
 * @param {Object} options - Email options
 * @param {string} options.email - The new email address to send the verification to
 * @param {string} options.firstName - The user's first name
 * @param {string} options.verificationCode - The verification code
 * @param {string} options.currentEmail - The user's current email address
 * @returns {Promise<Object>} - Email sending result
 */
async function sendEmailChangeVerificationEmail({ email, firstName, verificationCode, currentEmail }) {
    const verificationLink = `${FRONTEND_URL}/verify-email?token=${verificationCode}&currentEmail=${encodeURIComponent(currentEmail)}`;
    
    return await sendEmailVerificationEmail({
        email,
        firstName,
        verificationCode,
        verificationLink
    });
}

export { 
    sendVerificationEmail, 
    verifyEmail, 
    resendVerificationEmail, 
    startEmailChange,
    completeEmailChange 
};
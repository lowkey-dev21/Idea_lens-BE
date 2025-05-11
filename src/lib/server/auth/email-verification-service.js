import { FRONTEND_URL } from "$lib/shared/constants";
import { adjustDate } from "$lib/utils/date";
import { generateOTP } from "$lib/utils/server/crypto";
import { prisma } from "$lib/utils/server/prisma";
import { endpointResponse, methodResponse } from "$lib/utils/server/response-handler";
import { isEmail } from "multiform-validator";
import { sendEmailVerificationEmail, sendWelcomeEmail } from "../notifications/email-service";

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

export { sendVerificationEmail, verifyEmail, resendVerificationEmail };
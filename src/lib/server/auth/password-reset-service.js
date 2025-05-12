import { adjustDate } from "$lib/utils/date";
import { comparePasswordHash, generateOTP, hashPassword } from "$lib/utils/server/crypto";
import { prisma } from "$lib/utils/server/prisma";
import { endpointResponse } from "$lib/utils/server/response-handler";
import { sendPasswordResetEmail, sendPasswordResetSuccessEmail } from "$lib/server/notifications/email-service";
import { RESET_PASSWORD_URL } from "$lib/shared/constants";
import { validatePassword } from "$lib/utils/server/validators";
import { isEmail } from "multiform-validator";

// Constants
const TOKEN_EXPIRY_HOURS = 1;
const MAX_RESET_ATTEMPTS = 12;
const RESET_ATTEMPT_WINDOW_HOURS = 24;

/**
 * Validates the email address format
 * @param {string} email - The email address to validate
 * @returns {boolean} - Whether the email is valid
 */
function validateEmail(email) {
    return isEmail(email);
}

/**
 * Checks if a user has exceeded the maximum number of password reset attempts
 * @param {string} email - The email address to check
 * @returns {Promise<boolean>} - Whether the user has exceeded the maximum attempts
 */
async function hasExceededResetAttempts(email) {
    const windowStart = adjustDate([{ unit: "hour", value: -RESET_ATTEMPT_WINDOW_HOURS }]);
    
    const resetAttempts = await prisma.passwordResetToken.count({
        where: {
            user: {
                email
            },
            createdAt: {
                gte: windowStart
            }
        }
    });

    return resetAttempts >= MAX_RESET_ATTEMPTS;
}

/**
 * Starts a password reset process for a user.
 * @param {Object} options - The options for the password reset.
 * @param {string} options.email - The email address of the user to reset the password for.
 * @returns {Promise<Response>} - The response from the email service.
 */
async function startPasswordReset({ email }) {
    try {
        if (!validateEmail(email)) {
            return endpointResponse(false, 400, 'Invalid email address format.');
        }

        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                firstName: true
            }
        });
    
        if (!user) {
            return endpointResponse(false, 400, 'User not found.');
        }

        if (await hasExceededResetAttempts(email)) {
            return endpointResponse(false, 429, `Too many password reset attempts. Please try again in ${RESET_ATTEMPT_WINDOW_HOURS} hours.`);
        }

        // Use a transaction to ensure data consistency
        const resetToken = await prisma.$transaction(async (/** @type {import('@prisma/client').PrismaClient} */ tx) => {
            // Delete any existing reset tokens for this user
            await tx.passwordResetToken.deleteMany({
                where: {
                    userId: user.id
                }
            });
        
            // Create new reset token
            return await tx.passwordResetToken.create({
                data: {
                    userId: user.id,
                    token: generateOTP({ type: 'numeric', length: 6 }),
                    expiresAt: adjustDate([{ unit: "hour", value: TOKEN_EXPIRY_HOURS }]),
                },
            });
        });

        await sendPasswordResetEmail({ 
            email, 
            firstName: user.firstName, 
            resetLink: `${RESET_PASSWORD_URL}?token=${resetToken.token}` 
        });

        return endpointResponse(true, 200, 'Password reset token created successfully.');
    } catch (error) {
        console.error('Password reset error:', error);
        return endpointResponse(false, 500, 'An error occurred while processing your password reset request.');
    }
}

/**
 * Resets a user's password using a password reset token.
 * @param {Object} options - The options for the password reset.
 * @param {string} options.token - The token used to reset the password.
 * @param {string} options.password - The new password for the user.
 * @returns {Promise<Response>} - The response from the password reset.
 */
async function resetPassword({ token, password }) {
    try {
        if (!token || !password) {
            return endpointResponse(false, 400, 'Token and password are required.');
        }

        // First validate the password format
        const isPasswordValid = validatePassword(password);
        if (!isPasswordValid.status) {
            return endpointResponse(false, 400, isPasswordValid.message);
        }

        const resetToken = await prisma.passwordResetToken.findUnique({
            where: { token },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        firstName: true,
                        hashedPassword: true,
                    },
                },
            },
        });

        if (!resetToken) {
            return endpointResponse(false, 400, 'Invalid password reset token. It may have expired or been used already.');
        }

        if (resetToken.expiresAt < new Date()) {
            await prisma.passwordResetToken.delete({
                where: { id: resetToken.id },
            });
            return endpointResponse(false, 400, 'Password reset token expired.');
        }

        // Check if the new password is the same as the current password
        const isSamePassword = await comparePasswordHash(password, resetToken.user.hashedPassword);
        if (isSamePassword) {
            return endpointResponse(false, 400, 'New password must be different from your current password.');
        }

        // Use a transaction to ensure data consistency
        await prisma.$transaction(async (/** @type {import('@prisma/client').PrismaClient} */ tx) => {
            // Update user's password
            await tx.user.update({
                where: { id: resetToken.userId },
                data: { 
                    hashedPassword: await hashPassword(password, 10),
                    updatedAt: new Date()
                },
            });

            // Delete the used reset token
            await tx.passwordResetToken.delete({
                where: { id: resetToken.id },
            });
        });

        await sendPasswordResetSuccessEmail({ 
            email: resetToken.user.email, 
            firstName: resetToken.user.firstName 
        });
    
        return endpointResponse(true, 200, 'Password reset successfully. You can now login with your new password.');
    } catch (error) {
        console.error('Password reset error:', error);
        return endpointResponse(false, 500, 'An error occurred while resetting your password.');
    }
}

export { startPasswordReset, resetPassword };
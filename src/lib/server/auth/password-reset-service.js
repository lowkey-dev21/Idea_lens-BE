import { adjustDate } from "$lib/utils/date";
import { generateOTP } from "$lib/utils/server/crypto";
import { prisma } from "$lib/utils/server/prisma";
import { endpointResponse } from "$lib/utils/server/response-handler";
import { sendPasswordResetEmail } from "$lib/server/notifications/email-service";
import { RESET_PASSWORD_URL } from "$lib/shared/constants";

/**
 * Starts a password reset process for a user.
 * @param {Object} options - The options for the password reset.
 * @param {string} options.email - The email address of the user to reset the password for.
 * @returns {Promise<Response>} - The response from the email service.
 */
async function startPasswordReset({ email }) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      return endpointResponse(false, 400, 'User not found.');
    }

    await prisma.passwordResetToken.deleteMany({
        where: {
            userId: user.id
        }
    })
  
    const resetToken = await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token: generateOTP({ type: 'numeric', length: 6 }),
        expiresAt: adjustDate([{ unit: "hour", value: 1 }]),
      },
    });

    await sendPasswordResetEmail({ email, firstName: user.firstName, resetLink: `${RESET_PASSWORD_URL}?token=${resetToken.token}` });

    return endpointResponse(true, 200, 'Password reset token created successfully.');
  }

  async function resetPassword({ token }) {
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
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

    await prisma.user.update({
      where: { id: resetToken.userId },
      data: { password: resetToken.token },
    });

    await prisma.passwordResetToken.delete({
      where: { id: resetToken.id },
    });
    
    return endpointResponse(true, 200, 'Password reset successfully. You can now login with your new password.');
  }

export { startPasswordReset, resetPassword };
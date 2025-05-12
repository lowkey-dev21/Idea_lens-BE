import { resendVerificationEmail } from "$lib/server/auth/email-verification-service";

export const POST = async ({ request }) => {
    const { email } = await request.json();
    return await resendVerificationEmail(email);
};
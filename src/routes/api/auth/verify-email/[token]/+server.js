import { verifyEmail } from "$lib/server/auth/email-verification-service";

export const POST = async ({ params }) => {
    const { token } = params;
    const result = await verifyEmail({ token });
    return result;
};
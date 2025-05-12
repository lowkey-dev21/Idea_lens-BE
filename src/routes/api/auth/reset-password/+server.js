import { startPasswordReset } from "$lib/server/auth/password-reset-service";

export const POST = async ({ request }) => {
  const { email } = await request.json();
    return await startPasswordReset({ email });
};
import { resetPassword } from "$lib/server/auth/password-reset-service";

export const POST = async ({ params }) => {
  const { token } = params;
  return await resetPassword({ token });
};
import { resetPassword } from "$lib/server/auth/password-reset-service";

export const POST = async ({ params, request }) => {
  const { token } = params;
  const { password } = await request.json();
  return await resetPassword({ token, password });
};
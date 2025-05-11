import { loginUserWithEmailAndPassword } from '$lib/server/auth/auth-service';

export const POST = async ({ request, getClientAddress }) => {
  const { email, password, ipAddress, userAgent } = await request.json();

  const ip = ipAddress || request.headers.get('x-forwarded-for') || getClientAddress();
  const ua = userAgent || request.headers.get('user-agent');

  return await loginUserWithEmailAndPassword({ email, password, ipAddress: ip, userAgent: ua });
};
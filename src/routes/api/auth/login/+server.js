import { loginUserWithEmailAndPassword } from '$lib/server/auth/auth-service';
import { faker } from '@faker-js/faker';

export const POST = async ({ request, getClientAddress }) => {
  const { email, password, ipAddress, userAgent } = await request.json();

  const ip = ipAddress || request.headers.get('x-forwarded-for') || getClientAddress();
  const ua = userAgent || request.headers.get('user-agent');

  return await loginUserWithEmailAndPassword({ email, password, ipAddress: ip === "127.0.0.1" ? faker.internet.ipv4() : ip, userAgent: ua === "PostmanRuntime/7.43.4" ? faker.internet.userAgent() : ua });
};
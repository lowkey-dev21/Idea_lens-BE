import { completeEmailChange } from '$lib/server/auth/email-verification-service';
import { faker } from '@faker-js/faker';

export const POST = async ({ params, request, getClientAddress }) => {
    const { token } = params;
    const ip = request.headers.get('x-forwarded-for') || getClientAddress();
  const ua = request.headers.get('user-agent');

  return await completeEmailChange({
    token,
    ip: ip === "127.0.0.1" ? faker.internet.ipv4() : ip,
    uaString: (ua && ua === "PostmanRuntime/7.43.4") ? faker.internet.userAgent() : (ua ?? "")
  })
}
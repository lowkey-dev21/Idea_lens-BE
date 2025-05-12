import { getUserBySessionToken } from "$lib/server/user/user-profile-service";
import { UNAUTHORIZED } from "$lib/utils/server/response-handler.js";
import { json } from "@sveltejs/kit";

export const GET = async ({ locals }) => {
    if (!locals.sessionToken) {
        return json(UNAUTHORIZED, { status: UNAUTHORIZED.code });
    }
  const user = await getUserBySessionToken(locals.sessionToken);
  return user;
};

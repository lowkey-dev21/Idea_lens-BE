import { refreshSessionToken } from "$lib/server/auth/auth-service";

export const POST = async ({ request, locals }) => {
    const { sessionToken } = await request.json();
    return await refreshSessionToken(sessionToken || locals.sessionToken);
}
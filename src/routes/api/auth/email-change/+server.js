import { startEmailChange } from '$lib/server/auth/email-verification-service.js';
import { UNAUTHORIZED } from '$lib/utils/server/response-handler.js';
import { json } from '@sveltejs/kit';

export const POST = async ({ request, locals }) => {
    const { newEmail, password } = await request.json();

    if (!locals?.sessionToken) return json({ UNAUTHORIZED }, {status: UNAUTHORIZED.code})

    return await startEmailChange({
        sessionToken: locals.sessionToken,
        newEmail: newEmail,
        password: password
    })
}
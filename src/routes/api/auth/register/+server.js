import { registerUserWithEmailAndPassword } from "$lib/server/auth/auth-service";

export const POST = async ({ request }) => {
    const { firstName, lastName, email, password } = await request.json();

    return await registerUserWithEmailAndPassword({ firstName, lastName, email, password });
}
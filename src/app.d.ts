import type { User } from '$lib/types'; // Adjust this import if you have a User type, or use 'any' if not

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			sessionToken: string | null;
			user: User | null;
			roles: { workspaceRole: string | null; projectRole: string | null };
			permissions: string[];
			necessaryPermissions?: string[];
		}
	}
}

export {};

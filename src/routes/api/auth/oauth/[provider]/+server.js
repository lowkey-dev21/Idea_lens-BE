import { google } from '$lib/server/services/google/google-service';
import { generateState } from 'arctic';
import { json } from '@sveltejs/kit';
import { generateCodeVerifier } from 'arctic';

const OAUTH_PROVIDERS = ['google', 'github'];

export const GET = async ({ params, cookies }) => {
  const { provider } = params;

  if (provider === 'google') {
	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const url = google.createAuthorizationURL(state, codeVerifier, ["openid", "profile", "email"]);

	cookies.set("google_oauth_state", state, {
		path: "/",
		httpOnly: true,
		maxAge: 60 * 10, // 10 minutes
		sameSite: "lax"
	});
	cookies.set("google_code_verifier", codeVerifier, {
		path: "/",
		httpOnly: true,
		maxAge: 60 * 10, // 10 minutes
		sameSite: "lax"
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString()
		}
	});

  }

  if (!OAUTH_PROVIDERS.includes(provider)) {
    return json("Invalid provider", { status: 400 });
  }
  
};
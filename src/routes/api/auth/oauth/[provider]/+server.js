import { google } from '$lib/server/services/google/google-service';
import { generateState } from 'arctic';
import { json } from '@sveltejs/kit';
import { generateCodeVerifier } from 'arctic';
import { github } from '$lib/server/services/github/github-service';

const OAUTH_PROVIDERS = ['google', 'github'];

export const GET = async ({ params, cookies }) => {
  const { provider } = params;

  if (!OAUTH_PROVIDERS.includes(provider)) {
    return json({ error: "Invalid provider" }, { status: 400 });
  }

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

  if (provider === 'github') {
    const state = generateState();
    const url = github.createAuthorizationURL(state, ["user:email"]);  // Use correct scope for GitHub

    cookies.set("github_oauth_state", state, {
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
  
  // This should never be reached due to the check at the top
  return json({ error: "Provider not implemented" }, { status: 501 });
};
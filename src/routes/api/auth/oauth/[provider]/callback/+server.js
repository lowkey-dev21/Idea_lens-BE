import { json } from '@sveltejs/kit';
import { google } from '$lib/server/services/google/google-service';
import { decodeIdToken } from 'arctic';
import { create_user, login_user } from '$lib/server/auth/auth-service';

const OAUTH_PROVIDERS = ['google', 'github'];
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'; // Adjust this to your frontend URL

export const GET = async ({ params, cookies, request }) => {
  const { provider } = params;

  if (!OAUTH_PROVIDERS.includes(provider)) {
    return json({ error: 'Invalid provider' }, { status: 400 });
  }

  if (provider === 'google') {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const storedState = cookies.get('google_oauth_state');
    const codeVerifier = cookies.get('google_code_verifier');

    if (!code || !state || !storedState || !codeVerifier) {
      return json({ error: 'Missing required parameters' }, { status: 400 });
    }

    if (state !== storedState) {
      return json({ error: 'Invalid state parameter' }, { status: 400 });
    }

    try {
      const tokens = await google.validateAuthorizationCode(code, codeVerifier);
      const claims = /** @type {any} */ (decodeIdToken(tokens.idToken()));
      
      const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
      const userAgent = request.headers.get('user-agent') || '';

      // Try to login first
      const loginResult = await login_user({
        email: claims.email,
        googleId: claims.sub,
        ipAddress,
        userAgent
      });

      if (loginResult.status && loginResult.data && 'sessionToken' in loginResult.data) {
        // Clear OAuth state cookies
        cookies.delete('google_oauth_state', { path: '/' });
        cookies.delete('google_code_verifier', { path: '/' });

        // Redirect to frontend with session token
        return new Response(null, {
          status: 302,
          headers: {
            'Location': `${FRONTEND_URL}/auth/callback?token=${loginResult.data.sessionToken}`
          }
        });
      }

      // If login fails, try to create a new user
      const createResult = await create_user({
        email: claims.email,
        googleId: claims.sub,
        firstName: claims.given_name,
        lastName: claims.family_name,
        profilePicture: claims.picture
      });

      if (!createResult.status) {
        return json({ error: createResult.message }, { status: createResult.code });
      }

      // Try login again after creating the user
      const finalLoginResult = await login_user({
        email: claims.email,
        googleId: claims.sub,
        ipAddress,
        userAgent
      });

      if (!finalLoginResult.status || !finalLoginResult.data || !('sessionToken' in finalLoginResult.data)) {
        return json({ error: finalLoginResult.message }, { status: finalLoginResult.code });
      }

      // Clear OAuth state cookies
      cookies.delete('google_oauth_state', { path: '/' });
      cookies.delete('google_code_verifier', { path: '/' });

      // Redirect to frontend with session token
      return new Response(null, {
        status: 302,
        headers: {
          'Location': `${FRONTEND_URL}/auth/callback?token=${finalLoginResult.data.sessionToken}`
        }
      });
    } catch (error) {
      console.error('Google OAuth error:', error);
      return json({ error: 'Failed to authenticate with Google' }, { status: 500 });
    }
  }

  if (provider === 'github') {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const storedState = cookies.get('github_oauth_state');
    
    if (!code || !state || !storedState) {
      return json({ error: 'Missing required parameters' }, { status: 400 });
    }

    if (state !== storedState) {
      return json({ error: 'Invalid state parameter' }, { status: 400 });
    }

    try {
      // Assuming you have a github service similar to the google one
      const github = await import('$lib/server/services/github/github-service').then(m => m.github);
      const tokens = await github.validateAuthorizationCode(code);
      const accessToken = tokens.accessToken();

      // Fetch user data from GitHub API
      const githubUserResponse = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const githubUser = await githubUserResponse.json();
      
      // Fetch user email (requires email scope)
      const emailsResponse = await fetch("https://api.github.com/user/emails", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const emails = await emailsResponse.json();
      
      // Find primary email
      const primaryEmail = emails.find((/** @type {any} */ email) => email.primary)?.email || emails[0]?.email;
      
      if (!primaryEmail) {
        return json({ error: 'Could not retrieve email from GitHub' }, { status: 400 });
      }

      const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
      const userAgent = request.headers.get('user-agent') || '';

      // Try to login first
      const loginResult = await login_user({
        email: primaryEmail,
        githubId: githubUser.id.toString(),
        ipAddress,
        userAgent
      });

      if (loginResult.status && loginResult.data && 'sessionToken' in loginResult.data) {
        // Clear OAuth state cookies
        cookies.delete('github_oauth_state', { path: '/' });

        // Redirect to frontend with session token
        return new Response(null, {
          status: 302,
          headers: {
            'Location': `${FRONTEND_URL}/auth/callback?token=${loginResult.data.sessionToken}`
          }
        });
      }

      // If login fails, try to create a new user
      const createResult = await create_user({
        email: primaryEmail,
        githubId: githubUser.id.toString(),
        firstName: githubUser.name?.split(' ')[0] || '',
        lastName: githubUser.name?.split(' ').slice(1).join(' ') || '',
        profilePicture: githubUser.avatar_url
      });

      if (!createResult.status) {
        return json({ error: createResult.message }, { status: createResult.code });
      }

      // Try login again after creating the user
      const finalLoginResult = await login_user({
        email: primaryEmail,
        githubId: githubUser.id.toString(),
        ipAddress,
        userAgent
      });

      if (!finalLoginResult.status || !finalLoginResult.data || !('sessionToken' in finalLoginResult.data)) {
        return json({ error: finalLoginResult.message }, { status: finalLoginResult.code });
      }

      // Clear OAuth state cookies
      cookies.delete('github_oauth_state', { path: '/' });

      // Redirect to frontend with session token
      return new Response(null, {
        status: 302,
        headers: {
          'Location': `${FRONTEND_URL}/auth/callback?token=${finalLoginResult.data.sessionToken}`
        }
      });
    } catch (error) {
      console.error('GitHub OAuth error:', error);
      return json({ error: 'Failed to authenticate with GitHub' }, { status: 500 });
    }
  }
};
// hooks.server.js
import { dev } from '$app/environment';
import { json, text } from '@sveltejs/kit';
import { getRequiredPermissionsForRequest } from '$lib/shared/permissions/permission-utils';
import { validateSessionById } from '$lib/server/auth/auth-service'; // Ensure this path and function exist
import { ALLOWED_ORIGINS } from '$lib/shared/constants'; // Ensure this path and constant exist
import logger from '$lib/utils/server/logger'; // Ensure this path and logger exist

/**
 * Handles CORS, CSRF, and basic authentication protection.
 * Only stores sessionToken in event.locals if authenticated and session is valid.
 */
export const handle = async ({ event, resolve }) => {
	const { request, url } = event;
	const method = request.method;
	const origin = request.headers.get('origin');
	const pathname = url.pathname;

	// --- CORS Handling ---
	const allowedOrigins = dev ? ['*'] : [...ALLOWED_ORIGINS];
	const corsHeaders = new Headers();
	const isAllowedOrigin = !origin || dev || allowedOrigins.includes(origin) || allowedOrigins.includes('*');

	if (method === 'OPTIONS') {
		if (isAllowedOrigin) {
			corsHeaders.set('Access-Control-Allow-Origin', origin || '*');
			corsHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
			corsHeaders.set(
				'Access-Control-Allow-Headers',
				'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Workspace-ID, X-Project-ID' // Keep context headers if clients send them
			);
			corsHeaders.set('Access-Control-Allow-Credentials', 'true');
			corsHeaders.set('Access-Control-Max-Age', '3600');
		}
		return new Response(null, { status: 204, headers: corsHeaders });
	}

	if (origin && isAllowedOrigin) {
		corsHeaders.set('Access-Control-Allow-Origin', origin);
		corsHeaders.set('Access-Control-Allow-Credentials', 'true');
		corsHeaders.set('Vary', 'Origin');
	}

	// --- CSRF Handling ---
	const csrfExemptPaths = ['/api/webhooks/flutterwave'];
    const isCsrfExemptDynamic = pathname.startsWith('/api/webhooks/integrations/') || pathname.startsWith('/webhook/'); // Adjusted for /webhook/:hookId

	const isCsrfViolation =
		isFormContentType(request) &&
		['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) &&
		origin !== url.origin &&
		!csrfExemptPaths.includes(pathname) &&
        !isCsrfExemptDynamic &&
		!(pathname.startsWith('/api/') && isAllowedOrigin);

	if (isCsrfViolation) {
		const message = `Cross-site ${method} form submissions are forbidden`;
		logger.warn('CSRF violation attempt', { origin, path: pathname, method });
		const response = request.headers.get('accept')?.includes('application/json')
			? json({ message }, { status: 403 })
			: text(message, { status: 403 });
		for (const [key, value] of corsHeaders) response.headers.set(key, value);
		return response;
	}

	// --- Authentication Check ---
	const svelteKitRouteId = event.route.id; // e.g. /api/projects/[project_id]
	const httpMethod = request.method;
	event.locals.sessionToken = null; // Initialize

	const necessaryPermissions = getRequiredPermissionsForRequest(svelteKitRouteId, httpMethod);

    let requiresAuth = false;

    if (necessaryPermissions === null) {
        // Route is not in apiPermissionsMap.
        if (svelteKitRouteId && svelteKitRouteId.startsWith('/api/')) {
            if (!svelteKitRouteId.startsWith('/api/auth/oauth') && !svelteKitRouteId.startsWith('/webhook/')) { // Exclude common public patterns
                 logger.warn(`API Route ${svelteKitRouteId} not found in apiPermissionsMap. Defaulting to requiring auth for safety.`);
                 requiresAuth = true;
            }
        }
    } else if (necessaryPermissions === undefined) {
        // Route is in map, but method is not configured (and no 'ALL' fallback).
        if (svelteKitRouteId && svelteKitRouteId.startsWith('/api/')) {
            logger.error(`CRITICAL: Method ${httpMethod} not configured for API route ${svelteKitRouteId} in apiPermissionsMap. Denying access.`);
            const res = json({ message: `Endpoint method ${httpMethod} not configured for this route.` }, { status: 500 });
            for (const [key, value] of corsHeaders) res.headers.set(key, value);
            return res;
        }
    } else if (necessaryPermissions.length > 0) {
        // Permissions array is not empty, so authentication is required.
        requiresAuth = true;
    }
    // If necessaryPermissions is [], it's explicitly public. requiresAuth remains false.

	if (requiresAuth) {
		const authHeader = request.headers.get('Authorization');
		const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

		if (!tokenFromHeader) {
			logger.warn('Authentication required (no token)', { route: svelteKitRouteId, method: httpMethod });
			const res = json({ message: 'Unauthorized. Authentication token is missing.' }, { status: 401 });
            for (const [key, value] of corsHeaders) res.headers.set(key, value);
            return res;
		}

		try {
			const sessionData = await validateSessionById(tokenFromHeader);
			if (!sessionData || !sessionData.user) {
				logger.warn('Authentication failed (invalid session or user not found)', { route: svelteKitRouteId, method: httpMethod, tokenStart: tokenFromHeader.substring(0,5) });
				const res = json({ code: 401, status: false, message: 'Unauthorized. Invalid session or user.' }, { status: 401 });
                for (const [key, value] of corsHeaders) res.headers.set(key, value);
                return res;
			}
			event.locals.sessionToken = tokenFromHeader; // Store the validated token
            // event.locals.user = sessionData.user; // Optionally store user if many handlers need it directly
            logger.info('Authenticated access granted, session token stored in locals', { userId: sessionData.user.id, route: svelteKitRouteId, method: httpMethod });
		} catch (error) {
			logger.error('Error during session validation', { route: svelteKitRouteId, method: httpMethod, message: error.message, stack: error.stack?.substring(0, 200) });
			const res = json({ message: 'Internal Server Error during authentication process.' }, { status: 500 });
            for (const [key, value] of corsHeaders) res.headers.set(key, value);
            return res;
		}
	} else {
        logger.info('Public access or no specific auth required by hook for route', { route: svelteKitRouteId, method: httpMethod });
    }

	const response = await resolve(event);
	for (const [key, value] of corsHeaders) response.headers.set(key, value);
	return response;
};

function isFormContentType(request) {
	const type = request.headers.get('content-type')?.split(';', 1)[0].trim() ?? '';
	return ['application/x-www-form-urlencoded', 'multipart/form-data'].includes(type.toLowerCase());
}

export const handleFetch = async ({ request: fetchRequest, fetch: svelteKitFetch }) => {
	return svelteKitFetch(fetchRequest);
};
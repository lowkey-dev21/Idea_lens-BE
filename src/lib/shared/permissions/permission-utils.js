// lib/server/auth/permissions/permission-utils.js
import { apiPermissionsMap } from '$lib/shared/permissions/apiPermissions';
import logger from '$lib/utils/server/logger'; // Your logger instance

/**
 * Gets the array of necessary permissions for a given SvelteKit route ID and HTTP method.
 *
 * @param {string | null | undefined} routeId - The SvelteKit route.id string (e.g., '/api/projects/[project_id]').
 * @param {string} method - The HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @returns {string[] | null | undefined}
 *          - An array of permission strings (could be empty `[]` for public) if explicitly configured.
 *          - `null` if the route itself is not found in apiPermissionsMap (considered not configured for permissions).
 *          - `undefined` if the route is found, but the specific HTTP method (and no 'ALL' fallback) is not configured for permissions.
 */
export function getRequiredPermissionsForRequest(routeId, method) {
	if (!routeId) {
		logger.warn('getRequiredPermissionsForRequest called with invalid routeId.');
		return null; // Or consider throwing an error
	}

	const routeConfig = apiPermissionsMap[routeId];
	const upperMethod = method.toUpperCase();

	if (routeConfig === undefined) { // Check if the routeId key exists in the map
		if (routeId.startsWith('/api/')) { // Log only for API routes not found
			logger.warn(`No permissions configuration found in apiPermissionsMap for API route: ${routeId}`);
		}
		return null; // Route not configured in the map
	}

	// Route is configured, check for method-specific permissions
	if (routeConfig.hasOwnProperty(upperMethod)) {
		return routeConfig[upperMethod]; // Returns the array (e.g., [], ['P_...'])
	}

	// Check for 'ALL' fallback permissions if method-specific not found
	if (routeConfig.hasOwnProperty('ALL')) {
		logger.debug(`Using 'ALL' permissions for route: ${routeId}, method: ${upperMethod}`);
		return routeConfig['ALL'];
	}

	// Route is in map, but the specific method is not defined, and no 'ALL' fallback.
	logger.warn(`No specific permission configuration for method ${upperMethod} on mapped route ${routeId}, and no 'ALL' fallback.`);
	return undefined; // Indicate method not configured for this specific route
}
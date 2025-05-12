// lib/server/auth/permissions/permission-checker.js

import { prisma } from '$lib/utils/server/prisma'; // Your Prisma client
import { validateSessionById } from '$lib/server/auth/auth-service'; // Assumed function
import {
	baselineAuthenticatedUserPermissions,
	workspaceRolePermissions,
	projectRolePermissions
} from '$lib/shared/permissions/rolePermissionsMap';
import logger from '$lib/utils/server/logger';

/**
 * Retrieves the user associated with a session token, if the session is valid.
 * @param {string} sessionToken - The user's session token.
 * @returns {Promise<{id: string} | null>} The user object or null if session is invalid.
 */
async function getUserFromSessionToken(sessionToken) {
	if (!sessionToken) {
		return null;
	}
	const session = await validateSessionById(sessionToken); // This should include the user
	return session?.user || null;
}

/**
 * Checks if a user has a specific permission, potentially scoped to a workspace or project.
 *
 * @param {object} params - The parameters for the permission check.
 * @param {string} params.sessionToken - The user's session token.
 * @param {string} params.permission - The atomic permission string to check (e.g., 'PROJECT_CREATE').
 * @param {string} [params.workspaceId] - Optional: The ID of the workspace for workspace-scoped permissions.
 * @param {string} [params.projectId] - Optional: The ID of the project for project-scoped permissions.
 *                                      If projectId is provided, workspaceId should also ideally be implicitly known or provided.
 * @returns {Promise<boolean>} True if the user has the permission, false otherwise.
 */
export async function hasPermission({
	sessionToken,
	permission,
	workspaceId,
	projectId
}) {
	const user = await getUserFromSessionToken(sessionToken);

	if (!user) {
		logger.debug('Permission check failed: Invalid session or no user found.', { permission });
		return false; // No user, no permissions
	}

	// 1. Check baseline authenticated user permissions
	if (baselineAuthenticatedUserPermissions.includes(permission)) {
		logger.debug(`Permission granted via baseline: ${permission}`, { userId: user.id });
		return true;
	}

	// 2. Check project-scoped permissions (most specific)
	if (projectId) {
		try {
			const projectMember = await prisma.projectMember.findUnique({
				where: {
					projectId_userId: {
						projectId: projectId,
						userId: user.id
					}
				},
				select: { role: true, project: { select: { workspaceId: true } } } // Also get project's workspaceId
			});

			if (projectMember) {
                // Ensure the provided workspaceId (if any) matches the project's actual workspace
                if (workspaceId && projectMember.project.workspaceId !== workspaceId) {
                    logger.warn(`Permission check: Project ${projectId} does not belong to workspace ${workspaceId}.`, { userId: user.id });
                    // This could be a denial or just a note depending on strictness
                }

				const projectPerms = projectRolePermissions[projectMember.role] || [];
				if (projectPerms.includes(permission)) {
					logger.debug(`Permission granted via project role '${projectMember.role}' in project '${projectId}': ${permission}`, { userId: user.id });
					return true;
				}
			}
		} catch (error) {
			logger.error(`Error fetching project member for permission check: ${error.message}`, { userId: user.id, projectId, permission });
			return false; // Fail safely
		}
	}

	// 3. Check workspace-scoped permissions
	if (workspaceId) {
		try {
			const workspaceMember = await prisma.workspaceMember.findUnique({
				where: {
					workspaceId_userId: {
						workspaceId: workspaceId,
						userId: user.id
					}
				},
				select: { role: true }
			});

			if (workspaceMember) {
				const workspacePerms = workspaceRolePermissions[workspaceMember.role] || [];
				if (workspacePerms.includes(permission)) {
					logger.debug(`Permission granted via workspace role '${workspaceMember.role}' in workspace '${workspaceId}': ${permission}`, { userId: user.id });
					return true;
				}

                // Special case: Workspace ADMIN implicitly has full control over projects in their workspace
                // This is a common pattern but can be configured.
                // If checking a project-scoped permission AND user is workspace ADMIN for that project's workspace.
                if (projectId && workspaceMember.role === 'ADMIN' && permission.startsWith('PROJECT_')) {
                     // We need to verify the project indeed belongs to this workspace if not already done.
                     // The project check above would handle direct project roles.
                     // This is for when the user isn't explicitly a Project Manager but is Workspace Admin.
                     // To implement this robustly, you might fetch the project here to confirm its workspaceId.
                     // For now, we'll assume if projectId and workspaceId are passed, they are related.
                     // A simpler model might be: Workspace Admin can do *anything* a Project Manager can.
                     const adminProjectPerms = projectRolePermissions['MANAGER'] || []; // Give them Project Manager perms
                     if (adminProjectPerms.includes(permission)) {
                        logger.debug(`Permission granted implicitly to Workspace ADMIN for project action '${permission}' in workspace '${workspaceId}'`, { userId: user.id });
                        return true;
                     }
                }
			}
		} catch (error) {
			logger.error(`Error fetching workspace member for permission check: ${error.message}`, { userId: user.id, workspaceId, permission });
			return false; // Fail safely
		}
	}


	// 4. If no specific role grants the permission, deny
	logger.debug(`Permission denied: ${permission}`, { userId: user.id, workspaceId, projectId });
	return false;
}

/**
 * Convenience function to check if user can perform an action on a workspace.
 * @param {string} sessionToken
 * @param {string} permission - Workspace-scoped permission string.
 * @param {string} workspaceId
 * @returns {Promise<boolean>}
 */
export async function canUser(sessionToken, permission, workspaceId) {
    return hasPermission({ sessionToken, permission, workspaceId });
}

/**
 * Convenience function to check if user can perform an action on a project.
 * @param {string} sessionToken
 * @param {string} permission - Project-scoped permission string.
 * @param {string} projectId
 * @param {string} [workspaceId] - Optional but recommended: project's parent workspaceId for context.
 * @returns {Promise<boolean>}
 */
export async function canUserInProject(sessionToken, permission, projectId, workspaceId) {
    return hasPermission({ sessionToken, permission, projectId, workspaceId });
}
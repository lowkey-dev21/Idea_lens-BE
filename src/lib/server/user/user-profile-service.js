import { prisma } from '$lib/utils/server/prisma';
import { endpointResponse } from '$lib/utils/server/response-handler';

/**
 * Retrieves essential user data that should persist across sessions
 * 
 * @param {string} userId - The ID of the user to retrieve data for
 * @returns {Promise<Response>} User data object with persistent properties
 */
async function getUserPersistentData(userId) {
  if (!userId) {
    throw new Error('User ID is required');
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        avatarUrl: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
        userSettings: {
          select: {
            theme: true,
            language: true,
            timezone: true,
            receiveEmailNotifications: true,
            receiveInAppNotifications: true
          }
        },
        workspaceMemberships: {
          select: {
            role: true,
            workspace: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        projectMemberships: {
          select: {
            role: true,
            project: {
              select: {
                id: true,
                name: true,
                description: true,
                workspaceId: true
              }
            }
          }
        },
        notifications: {
          where: { isRead: false },
          orderBy: { createdAt: 'desc' },
          take: 3,
          select: {
            id: true,
            type: true,
            title: true,
            message: true,
            link: true,
            createdAt: true,
            entityId: true,
            entityType: true
          }
        }
      }
    });

    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    // Get total unread notification count
    const unreadNotificationCount = await prisma.notification.count({
      where: {
        userId: userId,
        isRead: false
      }
    });

    // Format the data for frontend consumption
    const userData = {
      email: user.email,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      avatarUrl: user.avatarUrl,
      emailVerified: !!user.emailVerified,
      updatedAt: user.updatedAt,
      settings: user.userSettings || {
        theme: 'SYSTEM',
        language: 'en',
        timezone: 'UTC',
        receiveEmailNotifications: true,
        receiveInAppNotifications: true
      },
      notifications: {
        unreadCount: unreadNotificationCount,
        recentItems: user.notifications.map(
          /** 
           * @param {{ 
           *   id: string;
           *   type: string;
           *   title: string;
           *   message: string;
           *   link: string | null;
           *   createdAt: Date;
           *   entityId: string | null;
           *   entityType: string | null;
           * }} notification 
           */
          notification => ({
            id: notification.id,
            type: notification.type,
            title: notification.title,
            message: notification.message,
            link: notification.link,
            createdAt: notification.createdAt,
            entityId: notification.entityId,
            entityType: notification.entityType
          })
        )
      },
      workspaces: user.workspaceMemberships.map(
        /** 
         * @param {{ 
         *   role: string;
         *   workspace: { 
         *     id: string; 
         *     name: string; 
         *   }
         * }} membership 
         */
        function(membership) {
          return {
            id: membership.workspace.id,
            name: membership.workspace.name,
            role: membership.role
          };
        }
      ),
      projects: user.projectMemberships.map(
        /** 
         * @param {{ 
         *   role: string;
         *   project: { 
         *     id: string; 
         *     name: string;
         *     description: string | null;
         *     workspaceId: string;
         *   }
         * }} membership 
         */
        function(membership) {
          return {
            id: membership.project.id,
            name: membership.project.name,
            description: membership.project.description || '',
            workspaceId: membership.project.workspaceId,
            role: membership.role
          };
        }
      )
    };

    return endpointResponse(true, 200, 'User persistent data retrieved successfully', userData);
  } catch (error) {
    console.error('Error fetching user persistent data:', error);
    throw new Error('Failed to retrieve user data');
  }
}

/**
 * Retrieves a user by their session token
 * 
 * @param {string} sessionToken - The session token to look up
 * @returns {Promise<Response>} User data or null if not found
 */
async function getUserBySessionToken(sessionToken) {
  if (!sessionToken) {
    return endpointResponse(false, 401, 'Session token is required', null);
  }

  try {
    const session = await prisma.session.findUnique({
      where: { sessionToken },
      select: {
        userId: true,
        expiresAt: true
      }
    });

    if (!session || session.expiresAt < new Date()) {
      return endpointResponse(false, 401, 'Session token is invalid', null);
    }

    return getUserPersistentData(session.userId);
  } catch (error) {
    console.error('Error fetching user by session token:', error);
    return endpointResponse(false, 500, 'Error fetching user by session token', null);
  }
}


export { getUserPersistentData, getUserBySessionToken };
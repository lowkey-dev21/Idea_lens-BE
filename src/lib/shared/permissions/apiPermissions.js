// lib/server/auth/permissions/apiPermissionsMap.js
import * as P from './rolePermissionsMap';

/**
 * API Route to Permission Mapping for IdeaLens (Method-Specific)
 * An empty array `[]` means the route/method is public.
 * A non-empty array means authentication is required for the hook.
 * The specific permissions are for more granular checks (e.g., in permission-checker.js).
 */
export const apiPermissionsMap = {
	// --- AUTHENTICATION ---
	'/api/auth/register': { 'POST': [] },
	'/api/auth/login': { 'POST': [] },
	'/api/auth/logout': { 'POST': [P.P_USER_LOGOUT_OWN] },
	'/api/auth/me': { 'GET': [P.P_USER_VIEW_OWN_PROFILE] },
	// '/api/auth/refresh': { 'POST': [] }, // Assuming refresh token logic needs specific handling, often public but secure
	'/api/auth/reset-password': { 'POST': [] },
	'/api/auth/reset-password/[token]': { 'POST': [] },
	'/api/auth/verify-email/[token]': { 'POST': [] }, // Postman shows POST, could be GET
	'/api/auth/resend-verification': { 'POST': [] },
	'/api/auth/email-change': { 'POST': [P.P_USER_REQUEST_EMAIL_CHANGE_OWN] },
	'/api/auth/email-change/[token]': { 'POST': [P.P_USER_CONFIRM_EMAIL_CHANGE_OWN] },
	'/api/auth/oauth/[provider]': { 'GET': [] }, // e.g., /api/auth/oauth/google
	'/api/auth/oauth/[provider]/callback': { 'GET': [] }, // e.g., /api/auth/oauth/google/callback

    // '/api/auth/accounts': { 'GET': [P.P_USER_MANAGE_OWN_OAUTH_ACCOUNTS], 'POST': [P.P_USER_MANAGE_OWN_OAUTH_ACCOUNTS] },
    // '/api/auth/accounts/[account_id]': { 'DELETE': [P.P_USER_MANAGE_OWN_OAUTH_ACCOUNTS] },


	// --- WORKSPACES ---
	'/api/workspaces': {
		'GET': [P.P_AUTHENTICATED_USER], // Lists user's workspaces
		'POST': [P.P_WORKSPACE_CREATE_NEW]
	},
	'/api/workspaces/[workspace_id]': {
		'GET': [P.P_WORKSPACE_VIEW_DETAILS],
		'PUT': [P.P_WORKSPACE_UPDATE_DETAILS],
		'DELETE': [P.P_WORKSPACE_DELETE]
	},
	'/api/workspaces/[workspace_id]/members': {
		'GET': [P.P_WORKSPACE_VIEW_MEMBERS]
	},
	'/api/workspaces/[workspace_id]/members/invite': {
		'POST': [P.P_WORKSPACE_INVITE_MEMBERS]
	},
	'/api/workspaces/[workspace_id]/members/[user_id]': {
		'PUT': [P.P_WORKSPACE_MANAGE_MEMBERS],    // Update role
		'DELETE': [P.P_WORKSPACE_MANAGE_MEMBERS] // Remove member
	},
	'/api/workspaces/invites/[invite_token]': { // Changed from {inviteId} in Postman to match SvelteKit style
		'GET': [] // Public for invitee to view
	},
	'/api/workspaces/invites/[invite_token]/accept': {
		'POST': [] // Public for invitee to accept
	},
	'/api/workspaces/invites/[invite_token]/reject': {
		'POST': [] // Public for invitee to reject
	},
    '/api/workspaces/[workspace_id]/settings': { // From directory structure
        'GET': [P.P_WORKSPACE_VIEW_SETTINGS],
        'PUT': [P.P_WORKSPACE_UPDATE_SETTINGS],
    },


	// --- WORKSPACE BILLING ---
    // These routes are under /api/workspaces/[workspace_id]/billing in directory, but Postman shows /api/billing/*
    // Assuming SvelteKit structure /api/workspaces/[workspace_id]/billing/*
	'/api/workspaces/[workspace_id]/billing/orders': { 'GET': [P.P_WORKSPACE_VIEW_BILLING_INFO] }, // List orders for workspace
	// '/api/billing/orders/[order_id]': { 'GET': [P.P_WORKSPACE_VIEW_BILLING_INFO] }, // If this is separate and specific
	'/api/workspaces/[workspace_id]/billing/status': { 'GET': [P.P_WORKSPACE_VIEW_BILLING_INFO] }, // Billing overview
	'/api/workspaces/[workspace_id]/billing/subscriptions': {
		'GET': [P.P_WORKSPACE_VIEW_BILLING_INFO],
		'POST': [P.P_WORKSPACE_MANAGE_SUBSCRIPTION]
	},
	'/api/workspaces/[workspace_id]/billing/subscriptions/[subscription_id]': {
		'PUT': [P.P_WORKSPACE_MANAGE_SUBSCRIPTION],
		'DELETE': [P.P_WORKSPACE_MANAGE_SUBSCRIPTION]
	},
	'/api/workspaces/[workspace_id]/billing/invoices': {
		'GET': [P.P_WORKSPACE_VIEW_BILLING_INFO]
	},
    // General billing routes not tied to a specific workspace in URL (context via header/body)
    '/api/billing/checkout/one-time': { 'POST': [P.P_WORKSPACE_INITIATE_PAYMENT] },
	'/api/billing/checkout/subscribe': { 'POST': [P.P_WORKSPACE_INITIATE_PAYMENT] },
	'/api/billing/plans': { 'GET': [] }, // Public
	'/api/billing/portal': { 'POST': [P.P_WORKSPACE_MANAGE_BILLING] }, // For customer portal access


	// --- PROJECTS ---
	'/api/projects': { // workspaceId in body for POST, or query param for GET
		'POST': [P.P_PROJECT_CREATE],
		'GET': [P.P_AUTHENTICATED_USER] // List user's accessible projects
	},
	'/api/projects/[project_id]': {
		'GET': [P.P_PROJECT_VIEW_DETAILS],
		'PUT': [P.P_PROJECT_UPDATE_DETAILS],
		'DELETE': [P.P_PROJECT_DELETE]
	},
	'/api/projects/[project_id]/ideas': {
		'GET': [P.P_IDEA_VIEW],
		'POST': [P.P_IDEA_CREATE]
	},
	'/api/projects/[project_id]/ideas/[idea_id]': {
		'GET': [P.P_IDEA_VIEW],
		'PUT': [P.P_IDEA_UPDATE],
		'DELETE': [P.P_IDEA_DELETE]
	},
    '/api/projects/[project_id]/ideas/[idea_id]/analyze': { 'POST': [P.P_IDEA_RUN_ANALYSIS] },
	'/api/projects/[project_id]/tasks': {
		'GET': [P.P_TASK_VIEW],
		'POST': [P.P_TASK_CREATE]
	},
	'/api/projects/[project_id]/tasks/[task_id]': {
		'GET': [P.P_TASK_VIEW],
		'PUT': [P.P_TASK_UPDATE],
		'DELETE': [P.P_TASK_DELETE]
	},
	'/api/projects/[project_id]/files': {
		'GET': [P.P_FILE_VIEW],
		'POST': [P.P_FILE_UPLOAD]
	},
	'/api/projects/[project_id]/files/[file_id]': {
		'GET': [P.P_FILE_VIEW],
		'DELETE': [P.P_FILE_DELETE]
	},
	'/api/projects/[project_id]/members': {
		'GET': [P.P_PROJECT_VIEW_MEMBERS],
		'POST': [P.P_PROJECT_MANAGE_MEMBERS] // Add member
	},
	'/api/projects/[project_id]/members/[user_id]': {
		'PUT': [P.P_PROJECT_MANAGE_MEMBERS], // Update role
		'DELETE': [P.P_PROJECT_MANAGE_MEMBERS] // Remove
	},


	// --- PROJECT AI ANALYSIS FEATURES ---
    // Note: Postman has GET routes for results; these are often combined with the POST that initiates.
    // Or, analyses are listed via a generic /analyses endpoint.
    // For simplicity, assuming POST starts it, GET on /analyses/[id] shows result.
	'/api/projects/[project_id]/analyses': { 'POST': [P.P_ANALYSIS_CREATE], 'GET': [P.P_ANALYSIS_VIEW] },
	'/api/projects/[project_id]/analyses/[analysis_id]': { 'GET': [P.P_ANALYSIS_VIEW], 'DELETE': [P.P_ANALYSIS_DELETE] },
    // Specific named AI routes map to a general "create analysis" permission
	'/api/projects/[project_id]/validation': { 'POST': [P.P_ANALYSIS_CREATE], 'GET': [P.P_ANALYSIS_VIEW] }, // Idea Validation
	'/api/projects/[project_id]/market-research': { 'POST': [P.P_ANALYSIS_CREATE], 'GET': [P.P_ANALYSIS_VIEW] },
	'/api/projects/[project_id]/competitor-analysis': { 'POST': [P.P_ANALYSIS_CREATE], 'GET': [P.P_ANALYSIS_VIEW] },
	'/api/projects/[project_id]/naming': { 'POST': [P.P_ANALYSIS_CREATE], 'GET': [P.P_ANALYSIS_VIEW] },
	'/api/projects/[project_id]/swot': { 'POST': [P.P_ANALYSIS_CREATE], 'GET': [P.P_ANALYSIS_VIEW] },
	'/api/projects/[project_id]/code-analysis': { 'POST': [P.P_ANALYSIS_CREATE] },
    '/api/projects/[project_id]/pitchdeck': { // Pitchdeck is a deliverable
        'POST': [P.P_DELIVERABLE_CREATE],
        'GET': [P.P_DELIVERABLE_VIEW] // List/get pitchdeck deliverables
    },
	// '/api/projects/[project_id]/productivity-metrics': { 'GET': [P.P_PROJECT_VIEW_PRODUCTIVITY_METRICS] },
	'/api/projects/[project_id]/run-pipeline': { 'POST': [P.P_PROJECT_RUN_PIPELINE] },
	// '/api/projects/[project_id]/usage': { 'GET': [P.P_PROJECT_VIEW_USAGE] },


	// --- GENERAL AI (Non-project specific in URL) ---
    // These need project/workspace context from body or header if they are not truly global AI features.
    // Assuming they operate on a specific project provided in payload.
	// '/api/ai/analyze-document': { 'POST': [P.P_AI_ANALYZE_DOCUMENT] }, // Potentially needs P_ANALYSIS_CREATE with project context
	// '/api/ai/analyze-image': { 'POST': [P.P_AI_ANALYZE_IMAGE] },
	// '/api/ai/analyze-text': { 'POST': [P.P_AI_ANALYZE_TEXT] },


	// --- INTEGRATIONS (User-level connect, project-level usage) ---
	'/api/integrations/[provider]/connect': { 'GET': [P.P_INTEGRATION_CONNECT_OWN] }, // Initiate OAuth
	'/api/integrations/[provider]/callback': { 'GET': [P.P_INTEGRATION_CONNECT_OWN] }, // Handle OAuth callback
	'/api/integrations/[provider]/repositories': { 'GET': [P.P_INTEGRATION_VIEW_REPOSITORIES_OWN] }, // List user's repos
    // '/api/integrations/[provider]/disconnect': { 'POST': [P.P_INTEGRATION_CONNECT_OWN] }, // Disconnect own integration
    // '/api/integrations/[provider]/status': { 'GET': [P.P_PROJECT_VIEW_INTEGRATIONS] }, // For a project context
	'/api/integrations/[provider]/[project_id]/sync': { 'POST': [P.P_PROJECT_SYNC_INTEGRATION_DATA] },
    // '/api/integrations/[provider]/slidespeak/generate': {POST: [P.P_DELIVERABLE_CREATE]}, // This is likely project-scoped


	// --- WEBHOOKS ---
	'/api/webhooks/flutterwave': { 'POST': [] }, // Public webhook
	'/api/webhooks/integrations/[integration_id]': { 'POST': [] }, // e.g., GitHub App webhook, public
    // '/api/webhooks/register': { 'POST': [P.P_WEBHOOK_REGISTER_CUSTOM] }, // If users register their own webhooks
    // '/api/webhook/[hookId]': { 'POST': [] }, // Path for incoming custom webhooks (Postman had /api/webhook/:hookId)


	// --- NOTIFICATIONS ---
	'/api/notifications': {
		'GET': [P.P_USER_VIEW_OWN_NOTIFICATIONS],
		'PATCH': [P.P_USER_UPDATE_OWN_NOTIFICATIONS] // E.g. mark all as read
	},
	'/api/notifications/[notification_id]': { // Singular based on directory
		'PATCH': [P.P_USER_UPDATE_OWN_NOTIFICATIONS], // Mark one as read
		'DELETE': [P.P_USER_UPDATE_OWN_NOTIFICATIONS] // Delete own notification
	},
	'/api/notifications/settings': {
		'GET': [P.P_USER_MANAGE_OWN_NOTIFICATION_SETTINGS],
		'PUT': [P.P_USER_MANAGE_OWN_NOTIFICATION_SETTINGS]
	},

	// --- USER PROFILE & SETTINGS ---
	'/api/user/profile': {
		'GET': [P.P_USER_VIEW_OWN_PROFILE],
		'PUT': [P.P_USER_UPDATE_OWN_PROFILE]
	},
	'/api/user/settings': {
        // Define P_USER_VIEW_OWN_SETTINGS, P_USER_UPDATE_OWN_SETTINGS if these are distinct from profile
		'GET': [P.P_USER_VIEW_OWN_PROFILE], // Or specific settings view perm
		'PUT': [P.P_USER_UPDATE_OWN_PROFILE]  // Or specific settings update perm
	},

    // --- MISC ---
    '/api/status': { 'GET': [] }, // Public health check
    // '/api/uploads': { 'POST': [P_AUTHENTICATED_USER] }, // General authenticated upload, needs context
};
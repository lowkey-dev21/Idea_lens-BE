|-- Idea_lens-BE
    |-- app.d.ts
    |-- app.html
    |-- directoryList.md
    |-- hooks.server.js
    |-- lib
    |   |-- index.js
    |   |-- server
    |   |   |-- ai
    |   |   |   |-- ai-config.js
    |   |   |   |-- orchestrators
    |   |   |   |   |-- code-analysis-orchestrator.js
    |   |   |   |   |-- competitor-analysis-orchestrator.js
    |   |   |   |   |-- document-analysis-orchestrator.js
    |   |   |   |   |-- idea-validation-orchestrator.js
    |   |   |   |   |-- market-research-orchestrator.js
    |   |   |   |   |-- naming-branding-orchestrator.js
    |   |   |   |   |-- productivity-insights-orchestrator.js
    |   |   |   |   |-- swot-analysis-orchestrator.js
    |   |   |   |-- providers
    |   |   |       |-- brave-search-service.js
    |   |   |       |-- gemini-service.js
    |   |   |       |-- mistral-service.js
    |   |   |       |-- perplexity-service.js
    |   |   |-- auth
    |   |   |   |-- account-service.js
    |   |   |   |-- api-key-service.js
    |   |   |   |-- auth-routes.js
    |   |   |   |-- auth-service.js
    |   |   |   |-- email-verification-service.js
    |   |   |   |-- oauth-handlers.js
    |   |   |   |-- password-reset-service.js
    |   |   |   |-- token-service.js
    |   |   |-- billing
    |   |   |   |-- billing-routes.js
    |   |   |   |-- flutterwave-service.js
    |   |   |   |-- order-service.js
    |   |   |   |-- plan-service.js
    |   |   |   |-- subscription-service.js
    |   |   |-- integrations
    |   |   |   |-- integration-orchestrator.js
    |   |   |   |-- templates
    |   |   |       |-- github-projects
    |   |   |       |   |-- github-projects-service.js
    |   |   |       |   |-- github-projects-webhook-handler.js
    |   |   |       |-- jira
    |   |   |           |-- jira-service.js
    |   |   |           |-- jira-webhook-handler.js
    |   |   |-- middleware
    |   |   |   |-- auth-middleware.js
    |   |   |   |-- project-access-middleware.js
    |   |   |   |-- rate-limit-middleware.js
    |   |   |   |-- workspace-access-middleware.js
    |   |   |-- notifications
    |   |   |   |-- email-service.js
    |   |   |   |-- notification-service.js
    |   |   |-- projects
    |   |   |   |-- analysis-service.js
    |   |   |   |-- file-service.js
    |   |   |   |-- idea-service.js
    |   |   |   |-- productivity-metric-service.js
    |   |   |   |-- project-member-service.js
    |   |   |   |-- project-service.js
    |   |   |   |-- task-service.js
    |   |   |-- queue
    |   |   |   |-- queue-config.js
    |   |   |   |-- queues
    |   |   |   |   |-- ai-task-queue.js
    |   |   |   |   |-- integration-queue.js
    |   |   |   |   |-- notification-worker.js
    |   |   |   |   |-- reporting-worker.js
    |   |   |   |-- workers
    |   |   |       |-- ai-task-worker.js
    |   |   |       |-- integration-worker.js
    |   |   |       |-- notification-worker.js
    |   |   |       |-- reporting-worker.js
    |   |   |-- services
    |   |   |   |-- brandfetch
    |   |   |   |   |-- brandfetch-service.js
    |   |   |   |-- cloudinary
    |   |   |   |   |-- cloudinary-service.js
    |   |   |   |-- domainR
    |   |   |   |   |-- domain-r-service.js
    |   |   |   |-- github
    |   |   |   |   |-- github-service.js
    |   |   |   |-- google
    |   |   |   |   |-- google-service.js
    |   |   |   |-- slidespeak
    |   |   |       |-- slidespeak-service.js
    |   |   |       |-- slidespeak-webhook-handler.js
    |   |   |-- uploads
    |   |   |   |-- upload-service.js
    |   |   |-- user
    |   |   |   |-- user-profile-service.js
    |   |   |   |-- user-settings-service.js
    |   |   |-- workspace
    |   |       |-- workspace-billing-service.js
    |   |       |-- workspace-member-service.js
    |   |       |-- workspace-service.js
    |   |       |-- workspace-settings-service.js
    |   |-- shared
    |   |   |-- constants.js
    |   |-- utils
    |       |-- date.js
    |       |-- emails.js
    |       |-- object.js
    |       |-- prompts.js
    |       |-- string.js
    |       |-- server
    |           |-- billing.js
    |           |-- bullmq.js
    |           |-- crypto,js
    |           |-- logger.js
    |           |-- prisma.js
    |           |-- rate-limiter.js
    |           |-- redis-client.js
    |           |-- response-handler.js
    |           |-- validators.js
    |-- routes
        |-- +page.svelte
        |-- api
            |-- auth
            |   |-- accounts
            |   |   |-- +server.js
            |   |   |-- [account_id]
            |   |       |-- +server.js
            |   |-- email-change
            |   |   |-- +server.js
            |   |   |-- [token]
            |   |       |-- +server.js
            |   |-- login
            |   |   |-- +server.js
            |   |-- logout
            |   |   |-- +server.js
            |   |-- me
            |   |   |-- +server.js
            |   |-- oauth
            |   |   |-- [provider]
            |   |       |-- +server.js
            |   |       |-- callback
            |   |           |-- +server.js
            |   |-- register
            |   |   |-- +server.js
            |   |-- resend-verification
            |   |   |-- +server.js
            |   |-- reset-password
            |   |   |-- +server.js
            |   |   |-- [token]
            |   |       |-- +server.js
            |   |-- verify-email
            |       |-- [token]
            |           |-- +server.js
            |-- billing
            |   |-- checkout
            |   |   |-- one-time
            |   |   |   |-- +server.js
            |   |   |-- subscribe
            |   |       |-- +server.js
            |   |-- orders
            |   |   |-- [order_id]
            |   |       |-- +server.js
            |   |-- plans
            |   |   |-- +server.js
            |   |-- portal
            |       |-- +server.js
            |-- integrations
            |   |-- [provider]
            |       |-- +server.js
            |       |-- [project_id]
            |       |   |-- sync
            |       |       |-- +server.js
            |       |-- callback
            |       |   |-- +server.js
            |       |-- connect
            |       |   |-- +server.js
            |       |-- disconnect
            |       |   |-- +server.js
            |       |-- repositories
            |       |   |-- +server.js
            |       |-- slidespeak
            |       |   |-- generate
            |       |       |-- +server.js
            |       |-- status
            |           |-- +server.js
            |-- notifications
            |   |-- +server.js
            |   |-- [notification_id]
            |   |   |-- +server.js
            |   |-- settings
            |       |-- +server.js
            |-- projects
            |   |-- +server.js
            |   |-- [project_id]
            |       |-- +server.js
            |       |-- analyses
            |       |   |-- +server.js
            |       |   |-- [analyses_id]
            |       |       |-- +server.js
            |       |-- code-analysis
            |       |   |-- +server.js
            |       |-- competitor-analysis
            |       |   |-- +server.js
            |       |-- files
            |       |   |-- +server.js
            |       |   |-- [file_id]
            |       |       |-- +server.js
            |       |-- ideas
            |       |   |-- +server.js
            |       |   |-- [idea_id]
            |       |       |-- +server.js
            |       |       |-- analyze
            |       |           |-- +server.js
            |       |-- market-research
            |       |   |-- +server.js
            |       |-- members
            |       |   |-- +server.js
            |       |   |-- [user_id]
            |       |       |-- +server.js
            |       |-- naming
            |       |   |-- +server.js
            |       |-- pitchdeck
            |       |   |-- +server.js
            |       |-- productivity-metrics
            |       |   |-- +server.js
            |       |-- run-pipeline
            |       |   |-- +server.js
            |       |-- swot
            |       |   |-- +server.js
            |       |-- tasks
            |       |   |-- +server.js
            |       |   |-- [task_id]
            |       |       |-- +server.js
            |       |-- validation
            |           |-- +server.js
            |-- status
            |   |-- +server.js
            |-- uploads
            |   |-- +server.js
            |-- user
            |   |-- profile
            |   |   |-- +server.js
            |   |-- settings
            |       |-- +server.js
            |-- webhooks
            |   |-- flutterwave
            |   |   |-- +server.js
            |   |-- integrations
            |       |-- [integration_id]
            |           |-- +server.js
            |-- workspaces
                |-- +server.js
                |-- [workspace_id]
                    |-- +server.js
                    |-- billing
                    |   |-- invoices
                    |   |   |-- +server.js
                    |   |-- orders
                    |   |   |-- +server.js
                    |   |-- status
                    |   |   |-- +server.js
                    |   |-- subscriptions
                    |       |-- +server.js
                    |       |-- [subscription_id]
                    |           |-- +server.js
                    |-- invites
                    |   |-- [invite_token]
                    |       |-- +server.js
                    |       |-- accept
                    |       |   |-- +server.js
                    |       |-- reject
                    |           |-- +server.js
                    |-- members
                    |   |-- +server.js
                    |   |-- [user_id]
                    |   |   |-- +server.js
                    |   |-- invite
                    |       |-- +server.js
                    |-- settings
                        |-- +server.js

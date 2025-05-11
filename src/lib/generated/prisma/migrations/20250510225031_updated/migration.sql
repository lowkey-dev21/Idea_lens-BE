-- CreateEnum
CREATE TYPE "GitHubAIActionType" AS ENUM ('PR_REVIEW_COMMENT', 'PR_SUMMARY_COMMENT', 'ISSUE_COMMENT', 'ISSUE_AUTO_CLOSE', 'ISSUE_AUTO_TAG', 'PR_AUTO_TAG');

-- CreateEnum
CREATE TYPE "GitHubEntityType" AS ENUM ('PULL_REQUEST', 'ISSUE', 'COMMIT');

-- CreateEnum
CREATE TYPE "ActionStatus" AS ENUM ('PENDING', 'EXECUTED', 'FAILED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "FeedbackEntityType" AS ENUM ('ANALYSIS_RESULT', 'NAME_SUGGESTION', 'TASK_SUGGESTION', 'GITHUB_AI_ACTION', 'PITCH_DECK_CONTENT', 'PLATFORM_FEATURE', 'GENERAL');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NotificationType" ADD VALUE 'GITHUB_AI_ACTION_SUCCESS';
ALTER TYPE "NotificationType" ADD VALUE 'GITHUB_AI_ACTION_FAILED';

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "projectStatus" TEXT;

-- CreateTable
CREATE TABLE "github_ai_action_logs" (
    "id" TEXT NOT NULL,
    "projectIntegrationId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "analysisId" TEXT,
    "actionType" "GitHubAIActionType" NOT NULL,
    "githubEntityType" "GitHubEntityType" NOT NULL,
    "githubEntityId" TEXT NOT NULL,
    "githubEntityUrl" TEXT,
    "githubCommentId" TEXT,
    "content" JSONB,
    "status" "ActionStatus" NOT NULL,
    "errorMessage" TEXT,
    "triggeredBy" TEXT,
    "performedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "github_ai_action_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_feedback" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityType" "FeedbackEntityType" NOT NULL,
    "entityId" TEXT,
    "rating" INTEGER,
    "comment" TEXT,
    "metadata" JSONB,
    "isResolved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "github_ai_action_logs_projectIntegrationId_githubEntityId_g_idx" ON "github_ai_action_logs"("projectIntegrationId", "githubEntityId", "githubEntityType");

-- CreateIndex
CREATE INDEX "github_ai_action_logs_analysisId_idx" ON "github_ai_action_logs"("analysisId");

-- CreateIndex
CREATE INDEX "github_ai_action_logs_projectId_performedAt_idx" ON "github_ai_action_logs"("projectId", "performedAt");

-- CreateIndex
CREATE INDEX "user_feedback_userId_entityType_idx" ON "user_feedback"("userId", "entityType");

-- CreateIndex
CREATE INDEX "user_feedback_entityType_entityId_idx" ON "user_feedback"("entityType", "entityId");

-- AddForeignKey
ALTER TABLE "github_ai_action_logs" ADD CONSTRAINT "github_ai_action_logs_projectIntegrationId_fkey" FOREIGN KEY ("projectIntegrationId") REFERENCES "project_integrations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "github_ai_action_logs" ADD CONSTRAINT "github_ai_action_logs_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "github_ai_action_logs" ADD CONSTRAINT "github_ai_action_logs_analysisId_fkey" FOREIGN KEY ("analysisId") REFERENCES "analyses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_feedback" ADD CONSTRAINT "user_feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

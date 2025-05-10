-- CreateEnum
CREATE TYPE "FileStatus" AS ENUM ('UPLOADING', 'ACTIVE', 'ARCHIVED', 'DELETION_PENDING', 'DELETED', 'ERROR');

-- CreateEnum
CREATE TYPE "DeliverableStatus" AS ENUM ('DRAFT', 'QUEUED', 'GENERATING', 'UPDATING', 'COMPLETED', 'FAILED', 'ARCHIVED');

-- AlterEnum
ALTER TYPE "FeedbackEntityType" ADD VALUE 'DELIVERABLE';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "NotificationType" ADD VALUE 'DELIVERABLE_GENERATED';
ALTER TYPE "NotificationType" ADD VALUE 'DELIVERABLE_UPDATED';
ALTER TYPE "NotificationType" ADD VALUE 'DELIVERABLE_GENERATION_FAILED';

-- AlterTable
ALTER TABLE "project_files" ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "status" "FileStatus" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "deliverables" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "format" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" "DeliverableStatus" NOT NULL DEFAULT 'DRAFT',
    "version" INTEGER NOT NULL DEFAULT 1,
    "projectFileId" TEXT,
    "externalUrl" TEXT,
    "generatedByAnalysisId" TEXT,
    "generatedByPipelineRunId" TEXT,
    "createdByUserId" TEXT NOT NULL,
    "lastUpdatedByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliverables_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliverables_projectFileId_key" ON "deliverables"("projectFileId");

-- CreateIndex
CREATE INDEX "deliverables_projectId_type_idx" ON "deliverables"("projectId", "type");

-- CreateIndex
CREATE INDEX "deliverables_generatedByAnalysisId_idx" ON "deliverables"("generatedByAnalysisId");

-- CreateIndex
CREATE INDEX "deliverables_generatedByPipelineRunId_idx" ON "deliverables"("generatedByPipelineRunId");

-- CreateIndex
CREATE INDEX "project_files_projectId_status_idx" ON "project_files"("projectId", "status");

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_projectFileId_fkey" FOREIGN KEY ("projectFileId") REFERENCES "project_files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_generatedByAnalysisId_fkey" FOREIGN KEY ("generatedByAnalysisId") REFERENCES "analyses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_generatedByPipelineRunId_fkey" FOREIGN KEY ("generatedByPipelineRunId") REFERENCES "project_pipeline_runs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_lastUpdatedByUserId_fkey" FOREIGN KEY ("lastUpdatedByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `createdAt` on the `comments` table. All the data in the column will be lost.
  - The `status` column on the `comments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `createdAt` on the `posts` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CommentStats" AS ENUM ('APPROVED', 'REJECT');

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "createdAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "status",
ADD COLUMN     "status" "CommentStats" NOT NULL DEFAULT 'APPROVED';

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "createdAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT,
ALTER COLUMN "status" DROP DEFAULT;

-- DropEnum
DROP TYPE "CommentStatus";

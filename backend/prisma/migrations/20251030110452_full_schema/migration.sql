/*
  Warnings:

  - You are about to drop the column `CostumeId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `Costume` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_CostumeId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "CostumeId";

-- DropTable
DROP TABLE "public"."Costume";

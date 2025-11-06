/*
  Warnings:

  - You are about to drop the column `GachaId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `SkillId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `Gacha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[AttributeName]` on the table `Attribute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Availability]` on the table `Availability` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CharacterName]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[EventName]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Rarity]` on the table `Rarity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UnitName]` on the table `Unit` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_GachaId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_SkillId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "GachaId",
DROP COLUMN "SkillId";

-- DropTable
DROP TABLE "public"."Gacha";

-- DropTable
DROP TABLE "public"."Skill";

-- CreateIndex
CREATE UNIQUE INDEX "Attribute_AttributeName_key" ON "Attribute"("AttributeName");

-- CreateIndex
CREATE UNIQUE INDEX "Availability_Availability_key" ON "Availability"("Availability");

-- CreateIndex
CREATE UNIQUE INDEX "Character_CharacterName_key" ON "Character"("CharacterName");

-- CreateIndex
CREATE UNIQUE INDEX "Event_EventName_key" ON "Event"("EventName");

-- CreateIndex
CREATE UNIQUE INDEX "Rarity_Rarity_key" ON "Rarity"("Rarity");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_UnitName_key" ON "Unit"("UnitName");

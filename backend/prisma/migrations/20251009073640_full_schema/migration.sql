/*
  Warnings:

  - You are about to drop the `Units` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_UnitId_fkey";

-- DropTable
DROP TABLE "public"."Units";

-- CreateTable
CREATE TABLE "Unit" (
    "UnitId" TEXT NOT NULL,
    "UnitName" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("UnitId")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_UnitId_fkey" FOREIGN KEY ("UnitId") REFERENCES "Unit"("UnitId") ON DELETE RESTRICT ON UPDATE CASCADE;

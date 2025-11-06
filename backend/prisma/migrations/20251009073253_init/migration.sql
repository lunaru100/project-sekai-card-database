-- CreateTable
CREATE TABLE "Card" (
    "CardId" TEXT NOT NULL,
    "CardName" TEXT NOT NULL,
    "CharacterId" TEXT NOT NULL,
    "UnitId" TEXT NOT NULL,
    "RarityId" TEXT NOT NULL,
    "AvailabilityId" TEXT NOT NULL,
    "CostumeId" TEXT NOT NULL,
    "ReleaseDate" TIMESTAMP(3) NOT NULL,
    "CardImg" TEXT NOT NULL,
    "CardImgTrained" TEXT NOT NULL,
    "AttributeId" TEXT NOT NULL,
    "EventId" TEXT NOT NULL,
    "GachaId" TEXT NOT NULL,
    "SkillId" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("CardId")
);

-- CreateTable
CREATE TABLE "Character" (
    "CharacterId" TEXT NOT NULL,
    "CharacterName" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("CharacterId")
);

-- CreateTable
CREATE TABLE "Units" (
    "UnitId" TEXT NOT NULL,
    "UnitName" TEXT NOT NULL,

    CONSTRAINT "Units_pkey" PRIMARY KEY ("UnitId")
);

-- CreateTable
CREATE TABLE "Rarity" (
    "RarityId" TEXT NOT NULL,
    "Rarity" TEXT NOT NULL,

    CONSTRAINT "Rarity_pkey" PRIMARY KEY ("RarityId")
);

-- CreateTable
CREATE TABLE "Availability" (
    "AvailabilityId" TEXT NOT NULL,
    "Availability" TEXT NOT NULL,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("AvailabilityId")
);

-- CreateTable
CREATE TABLE "Costume" (
    "CostumeId" TEXT NOT NULL,
    "CostumeName" TEXT NOT NULL,
    "CostumeType" TEXT NOT NULL,

    CONSTRAINT "Costume_pkey" PRIMARY KEY ("CostumeId")
);

-- CreateTable
CREATE TABLE "Attribute" (
    "AttributeId" TEXT NOT NULL,
    "AttributeName" TEXT NOT NULL,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("AttributeId")
);

-- CreateTable
CREATE TABLE "Event" (
    "EventId" TEXT NOT NULL,
    "EventName" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("EventId")
);

-- CreateTable
CREATE TABLE "Gacha" (
    "GachaId" TEXT NOT NULL,
    "GachaName" TEXT NOT NULL,

    CONSTRAINT "Gacha_pkey" PRIMARY KEY ("GachaId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "SkillId" TEXT NOT NULL,
    "SkillName" TEXT NOT NULL,
    "SkillEffect" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("SkillId")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES "Character"("CharacterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_UnitId_fkey" FOREIGN KEY ("UnitId") REFERENCES "Units"("UnitId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_RarityId_fkey" FOREIGN KEY ("RarityId") REFERENCES "Rarity"("RarityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_AvailabilityId_fkey" FOREIGN KEY ("AvailabilityId") REFERENCES "Availability"("AvailabilityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_CostumeId_fkey" FOREIGN KEY ("CostumeId") REFERENCES "Costume"("CostumeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_AttributeId_fkey" FOREIGN KEY ("AttributeId") REFERENCES "Attribute"("AttributeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_EventId_fkey" FOREIGN KEY ("EventId") REFERENCES "Event"("EventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_GachaId_fkey" FOREIGN KEY ("GachaId") REFERENCES "Gacha"("GachaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_SkillId_fkey" FOREIGN KEY ("SkillId") REFERENCES "Skill"("SkillId") ON DELETE RESTRICT ON UPDATE CASCADE;

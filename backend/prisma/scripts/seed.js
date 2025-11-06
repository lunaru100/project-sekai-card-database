import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import { PrismaClient } from "@prisma/client";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const csvFilePath = path.join(__dirname, "../../data/proseka_data_cut.csv");

const seed = async () => {
  const parser = fs
    .createReadStream("data/proseka_data_cut.csv")
    .pipe(parse({ delimiter: ";", columns: true }))
    .on("data", (row) => {
      console.log(row);
    })
    .on("error", (err) => {
      console.error(err);
    });

  for await (const row of parser) {
    const character = await prisma.character.upsert({
      where: { CharacterName: row.CharacterName },
      update: {},
      create: { CharacterName: row.CharacterName },
    });

    const unit = await prisma.unit.upsert({
      where: { UnitName: row.UnitName },
      update: {},
      create: { UnitName: row.UnitName },
    });

    const rarity = await prisma.rarity.upsert({
      where: { Rarity: row.Rarity },
      update: {},
      create: { Rarity: row.Rarity },
    });

    const availability = await prisma.availability.upsert({
      where: { Availability: row.Availability },
      update: {},
      create: { Availability: row.Availability },
    });

    const attribute = await prisma.attribute.upsert({
      where: { AttributeName: row.AttributeName },
      update: {},
      create: { AttributeName: row.AttributeName },
    });

    const event = await prisma.event.upsert({
      where: { EventName: row.EventName },
      update: {},
      create: { EventName: row.EventName },
    });

    const existingCard = await prisma.card.findFirst({
      where: {
        CardName: row.CardName,
        CharacterId: character.CharacterId,
        UnitId: unit.UnitId,
        RarityId: rarity.RarityId,
        AvailabilityId: availability.AvailabilityId,
        ReleaseDate: new Date(row.ReleaseDate),
        CardImg: row.CardImg,
        CardImgTrained: row.CardImgTrained,
        AttributeId: attribute.AttributeId,
        EventId: event.EventId,
      },
    });

    if (!existingCard) {
      await prisma.card.create({
        data: {
          CardName: row.CardName,
          CharacterId: character.CharacterId,
          UnitId: unit.UnitId,
          RarityId: rarity.RarityId,
          AvailabilityId: availability.AvailabilityId,
          ReleaseDate: new Date(row.ReleaseDate),
          CardImg: row.CardImg,
          CardImgTrained: row.CardImgTrained,
          AttributeId: attribute.AttributeId,
          EventId: event.EventId,
        },
      });
    }
  }
  console.log("Seeding complete!");
};
seed()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
    process.exit(1);
  });

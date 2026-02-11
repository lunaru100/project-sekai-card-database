import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

const RARITY_MAP = {
  "1 STAR": "1.0",
  "2 STAR": "2.0",
  "3 STAR": "3.0",
  "4 STAR": "4.0",
  BIRTHDAY: "5.0",
};

// GET /api/allCards?skip=0&take=30&units=LEO/NEED,VIRTUAL SINGER&rarities=4 STAR&characters=Ichika Hoshino
router.get("/allCards", async (req, res) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const take = parseInt(req.query.take) || 30;

    const { units, rarities, characters, availability, attributes, search } =
      req.query;

    const whereCondition = {};

    const createInCondition = (param, fieldName, map = null) => {
      if (param) {
        let values = param.split(",").map((v) => v.trim());

        if (map) {
          values = values
            .map((frontValue) => map[frontValue])
            .filter((dbValue) => dbValue !== undefined && dbValue !== null);
        }

        if (values.length === 0) {
          return undefined;
        }

        return {
          [fieldName]: {
            in: values,
          },
        };
      }
      return undefined;
    };

    const unitCondition = createInCondition(units, "UnitName");
    if (unitCondition) {
      whereCondition.Unit = unitCondition;
    }

    const rarityCondition = createInCondition(rarities, "Rarity", RARITY_MAP);
    if (rarityCondition) {
      whereCondition.Rarity = rarityCondition;
    }

    const characterCondition = createInCondition(characters, "CharacterName");
    if (characterCondition) {
      whereCondition.Character = characterCondition;
    }

    const availabilityCondition = createInCondition(
      availability,
      "Availability"
    );
    if (availabilityCondition) {
      whereCondition.Availability = availabilityCondition;
    }

    const attributeCondition = createInCondition(attributes, "AttributeName");
    if (attributeCondition) {
      whereCondition.Attribute = attributeCondition;
    }

    if (search) {
      whereCondition.CardName = {
        contains: search,
        mode: "insensitive",
      };
    }

    const cards = await prisma.card.findMany({
      where: whereCondition,
      select: {
        CardId: true,
        CardName: true,
        CardImg: true,
        CardImgTrained: true,
        Rarity: {
          select: {
            Rarity: true,
          },
        },
        Event: {
          select: {
            EventName: true,
          },
        },
        Unit: {
          select: {
            UnitName: true,
          },
        },
        Character: {
          select: {
            CharacterName: true,
          },
        },
        Availability: {
          select: {
            Availability: true,
          },
        },
        Attribute: {
          select: {
            AttributeName: true,
          },
        },
      },
      orderBy: [{ ReleaseDate: "desc" }, { Rarity: { Rarity: "desc" } }],
      skip,
      take,
    });

    const total = await prisma.card.count({
      where: whereCondition,
    });

    res.json({ cards, total });
  } catch (e) {
    console.error("Error fetching cards:", e);
    res
      .status(500)
      .json({ error: "Error fetching cards", details: e.message || e });
  }
});

export default router;

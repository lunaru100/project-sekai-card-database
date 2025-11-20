import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

// GET /api/allCards?skip=0&take=30
router.get("/allCards", async (req, res) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const take = parseInt(req.query.take) || 30;
    const cards = await prisma.card.findMany({
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
      },
      orderBy: [{ ReleaseDate: "desc" }, { Rarity: { Rarity: "desc" } }],
      skip,
      take,
    });

    const total = await prisma.card.count();

    res.json({ cards, total });
  } catch (e) {
    res.status(500).json({ error: "Error fetching cards", details: e });
  }
});

export default router;

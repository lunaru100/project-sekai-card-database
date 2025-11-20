import express from "express";
import prisma from "../prisma.js"; // update the path and extension if necessary

const router = express.Router();

router.get("/allCards", async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      select: {
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
    });
    res.json(cards);
  } catch (e) {
    res.status(500).json({ error: "Error fetching cards", details: e });
  }
});

export default router;

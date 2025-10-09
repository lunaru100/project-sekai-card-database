import express from "express";
import upload from "../upload.js";
import cloudinary from "../cloudinary.js";
import fs from "fs";

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log("req.file:", req.file); // dodaj to
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "cards",
    });

    fs.unlinkSync(req.file.path);
    res.json({ imageUrl: result.secure_url });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

export default router;

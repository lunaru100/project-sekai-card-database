import express from "express";
import cors from "cors";
import cardsRouter from "./routes/cards.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", cardsRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

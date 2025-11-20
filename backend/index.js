import express from "express";
import cardsRouter from "./routes/cards.js"; // note the .js extension!
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", cardsRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

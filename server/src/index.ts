import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port: string | number = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import express from "express";
import tweetsRoute from "./routes/tweetsRoute.js";
import dotenv from "dotenv";
import db from "./config/db.js";
const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/tweets", tweetsRoute);

app.listen(5500, () => {
  db();
  console.log("Server is running on port 5500!!!!!!");
});

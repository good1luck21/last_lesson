import express from "express";
import { getAllTweets, createTweet } from "../controllers/tweestsController.js";

const router = express.Router();

router.get("/", getAllTweets);
router.post("/", createTweet);

export default router;

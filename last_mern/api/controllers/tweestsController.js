import Tweet from "../models/tweet.js";

export const getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (err) {
    res.json({ message: err });
  }
};

export const createTweet = async (req, res) => {
  console.log(req);
  try {
    const tweet = await Tweet.create(req.body);
    res.json(tweet);
  } catch (err) {
    res.json({ message: err });
  }
};

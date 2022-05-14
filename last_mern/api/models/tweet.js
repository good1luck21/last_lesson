import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    context: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", tweetSchema);

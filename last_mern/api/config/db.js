import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}

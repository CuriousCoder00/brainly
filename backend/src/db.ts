import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/brain";
// Connect to MongoDB
export default function connectToDB() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
}

import mongoose from "mongoose";
const { Schema } = mongoose;

const linkSchema = new Schema({
  hash: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Link = mongoose.model("Link", linkSchema);
export default Link;

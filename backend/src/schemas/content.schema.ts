import mongoose from "mongoose";
const { Schema } = mongoose;

const contentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Content = mongoose.model("Content", contentSchema);
export default Content;

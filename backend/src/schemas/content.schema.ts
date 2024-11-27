import mongoose from "mongoose";
const { Schema } = mongoose;

const contentTypes = ["image", "video", "article", "audio", "tweet"];

const contentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: contentTypes,
    required: true,
  },
  link: {
    type: String,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Content = mongoose.model("Content", contentSchema);
export default Content;

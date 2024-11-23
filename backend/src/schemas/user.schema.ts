import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isNewUser: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;

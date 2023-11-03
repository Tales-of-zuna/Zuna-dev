import mongoose from "mongoose";
import User from "./userModel";

const commentSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: User },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Comment =
  mongoose.models?.Comment || mongoose.model("Comment", commentSchema);

export default Comment;

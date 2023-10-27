import mongoose from "mongoose";
import Category from "./categoryModel";
import Comment from "./commentModel";
import User from "./userModel";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    status: { type: Boolean, required: true, default: false },
    metadata: { type: String, required: true },
    slug: { type: String, required: true, lowercase: true, unique: true },
    summary: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    content: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String, required: true },
    tags: [{ type: String }],
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category,
        required: true,
      },
    ],

    comments: [
      { type: mongoose.Schema.Types.ObjectId, ref: Comment, required: true },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;

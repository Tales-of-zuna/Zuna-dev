import ConnectMongoDB from "@/configs/mongodb";
import Blog from "@/models/blogModel";
import { NextRequest } from "next/server";
import slugify from "slugify";

ConnectMongoDB();

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("name");

  try {
    const blogs = await Blog.find().populate("author");
    return Response.json(blogs);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  body.slug = slugify(body.title);
  try {
    const blog = await Blog.create(body);
    return Response.json(blog);
  } catch (error) {
    console.log(error);
  }
};

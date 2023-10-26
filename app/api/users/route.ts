import ConnectMongoDB from "@/configs/mongodb";
import User from "@/models/userModel";
import { NextRequest } from "next/server";
ConnectMongoDB();
export const GET = async () => {
  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get("query");
  try {
    const user = await User.find();
    return Response.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const user = await User.create(body);
    return Response.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const PUT = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const user = await User.findByIdAndUpdate(body._id, body, {
      new: true,
    });
    return Response.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const DELETE = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const user = await User.findByIdAndDelete(body._id);
    return Response.json(user);
  } catch (error) {
    console.log(error);
  }
};

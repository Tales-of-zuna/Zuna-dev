import ConnectMongoDB from "@/configs/mongodb";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

ConnectMongoDB();

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return Response.json("user not found");
    }
    const passmatch = await bcrypt.compare(body.password, user.password);
    if (!passmatch) {
      return Response.json("password not match");
    }
    const token = jwt.sign(
      JSON.stringify(user._id),
      process.env.JWT_SECRET as string
    );
    const userData = { ...user._doc, token: token };
    return Response.json(userData);
  } catch (error) {
    console.log(error);
  }
};

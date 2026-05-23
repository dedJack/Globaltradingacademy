import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../../models/User";
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req) {
  try {
    await dbConnect();

    const authHeader = req.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { msg: "No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findOne({
      email: decoded.email,
    }).select("-password");

    if (!user) {
      return NextResponse.json(
        { msg: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { user },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { msg: "Invalid token" },
      { status: 401 }
    );
  }
}
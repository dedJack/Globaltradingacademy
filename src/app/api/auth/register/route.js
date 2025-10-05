import { NextResponse } from "next/server";
import User from "../../../../models/User";
import dbConnect from "../../../../lib/dbConnect";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, phone, password } = body;

    // check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json({ msg: "Email already exists" }, { status: 400 });
    }

    // create new user
    const newUser = await User.create({ name, email, phone, password });

    return NextResponse.json(
      {
        msg: "User registered successfully",
        token: await newUser.generateToken(),
        userId: newUser._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { msg: "Server error during Registration" },
      { status: 500 }
    );
  }
}


import { NextResponse } from "next/server";
import User from "../../../../models/User";
import dbConnect from "../../../../lib/dbConnect";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { email, password } = body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return NextResponse.json({ msg: "Invalid credentials" }, { status: 400 });
    }

    const passCompare = await userExist.comparePassword(password);

    if (passCompare) {
      return NextResponse.json(
        {
          msg: "Login successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { msg: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { msg: "Internal server error" },
      { status: 500 }
    );
  }
}

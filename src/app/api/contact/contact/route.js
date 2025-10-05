import { NextResponse } from "next/server";
import dbConnect  from "../../../../lib/dbConnect";
import Contact from "../../../../models/Contact";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    const newContact = await Contact.create(body);
    return NextResponse.json({ message: "Contact saved successfully", newContact }, { status: 201 });
  } catch (error) {
    console.error("Error in contact form:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

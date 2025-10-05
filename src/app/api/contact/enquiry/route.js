import Enquiry from "../../../../models/Enquiry";
import dbConnect from "../../../../lib/dbConnect";
import { NextResponse } from "next/server";


export async function POST(req) {
    try{
        await dbConnect();
        const body = await req.json();

        const newEnquiry = await Enquiry.create(body);
        return NextResponse.json({message:"Enquiry successfully submitted", newEnquiry},{ status:201})

    }catch (e) {
        console.log("Error in  Enquiry form :",e);
        return NextResponse.json({message:"Internal server error"},{ status:500})

    }
}
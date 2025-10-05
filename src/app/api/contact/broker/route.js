import { NextResponse } from "next/server";
import QuickLinks from "../../../../models/QuickLinks";
import dbConnect from "../../../../lib/dbConnect"

export async function GET(req) {
    try {
        await dbConnect();
        const link = await QuickLinks.find();
        if(!link || link.length === 0){
            return NextResponse.json({message:"No Links to show."},{status:404});
        }

        return NextResponse.json({message:"Links successFully fetched",link},{status:200});
    } catch (error) {
        return NextResponse.json({message:"Internal Server Error"},{status:500});   
    }
}
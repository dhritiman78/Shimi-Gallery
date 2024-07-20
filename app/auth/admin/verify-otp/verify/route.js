import { dbconn } from "@/db/db";
import PageDetail from "@/models/pagedetails";
import { NextResponse } from "next/server";

export async function POST(req) {
    const otp = await req.json()
    await dbconn()
    try {
        const actual_otp = await PageDetail.findOne({key: 'otp'})

    if (otp == actual_otp.value) {
        return NextResponse.json({message: 'ok'})
        
    } else {
        return NextResponse.json({message: 'failed'})
    }
    } catch (error) {
        return NextResponse.json({message: 'failed'})
    }
    
}
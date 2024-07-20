import { dbconn } from "@/db/db";
import PageDetail from "@/models/pagedetails";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
export async function POST(req) {
    const password = await req.json()
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    await dbconn()
    try {
        await PageDetail.findOneAndUpdate({key: "password"}, {value: hash})
        return NextResponse.json({message: "Successfull!"})
    } catch (error) {
        return NextResponse.json({message: "Failed!"})
    }
}
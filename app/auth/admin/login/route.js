import { dbconn } from "@/db/db";
import PageDetail from "@/models/pagedetails";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(req) {
    const password = await req.json()
    await dbconn();
    try {
        const actual_password = await PageDetail.findOne({key: "password"});
        if (bcrypt.compareSync(password, actual_password.value)) {
            return NextResponse.json({ message: "Logged In!"})
        } else {
            return NextResponse.json({ message: "Incorrect Password!"})
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!"})
    }
}
import { dbconn } from '@/db/db';
import PageDetail from '@/models/pagedetails';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    const {intro} = data
    const document = {
      value: intro
    } 
      await dbconn()
      try {
        await PageDetail.findByIdAndUpdate("66954c9439c0cb93d1c780ed", document)
        return NextResponse.json({ message: 'Done' });
      } catch (error) {
        return NextResponse.json({ message: error });
      }
  } catch (error) {
    return NextResponse.json({ message: 'Failed' }, { status: 500 });
  }
}

export async function GET() {
  await dbconn()
  try {
    const data = await PageDetail.findOne({ key: "Introduction Paragraph" })
    if (!!data.value) {
      return NextResponse.json({value: data.value})
    } else {
      return NextResponse.json({value: ""})
    }
  } catch (error) {
    return NextResponse.json({value: ""})
  }
}
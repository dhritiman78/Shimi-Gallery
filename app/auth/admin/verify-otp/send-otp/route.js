import { dbconn } from '@/db/db';
import PageDetail from '@/models/pagedetails';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


let otpStore = {}; // Temporary in-memory store for OTPs, replace with a database in production

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_OTP_EMAIL,
    pass: process.env.NEXT_OTP_PASS,
  },
});

export async function POST(request) {
  const email = await request.json();
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  otpStore[email] = otp; // Store the OTP, replace with database logic

  await dbconn()
  try {
    await PageDetail.findOneAndUpdate({key: "otp"},{value: otp})
  } catch (error) {
    return NextResponse.json({ message: 'Error sending OTP' }, { status: 500 });
  }

  const mailOptions = {
    from: process.env.NEXT_OTP_EMAIL,
    to: email,
    subject: 'OTP Verification for Shimi-Gallery',
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending OTP' }, { status: 500 });
  }
}

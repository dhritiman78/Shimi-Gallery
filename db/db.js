import mongoose from "mongoose";

const userName = process.env.NEXT_DB_USERNAME;
const password = process.env.NEXT_DB_PASSWORD;
const database = process.env.NEXT_DB_DATABASE;

const uri = `mongodb+srv://${userName}:${password}@cluster0.c4doeee.mongodb.net/${database}`;

const clientOptions = {
  serverSelectionTimeoutMS: 50000,
  socketTimeoutMS: 50000,
};

export async function dbconn() {
  try {
    await mongoose.connect(uri, clientOptions);
  } catch (error) {
    console.log(error);
  }
}

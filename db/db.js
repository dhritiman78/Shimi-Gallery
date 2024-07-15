import mongoose from "mongoose";
const { username , password } = process.env

export async function dbconn() {
    try {
       await mongoose.connect('mongodb+srv://'+username+':'+password+'@cluster0.c4doeee.mongodb.net/sharminsart');        
    } catch (error) {
        console.log(error);
    }
}
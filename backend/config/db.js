import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const uri = process.env.MONGO_URL;

export const connectDB = async () => {
    try {
        mongoose.connect(uri);
        console.log("DB Connected!")
    } catch (error) {
        console.log(error)
    }
}
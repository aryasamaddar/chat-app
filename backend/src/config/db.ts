import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL as string);
        console.log("Connected to Database");
    }catch(err){
        console.log("Error connecting to Database");
    }
}
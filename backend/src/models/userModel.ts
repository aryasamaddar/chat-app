import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : { type : String, required : true },
    email : { type : String, required : true },
    password : { type : String, required : true },
    isAdmin : { type : Boolean, required : true },
})

export const user = mongoose.model("user" , userSchema);
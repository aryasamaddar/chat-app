import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db";

connectDB();


const app = express();

app.use(cookieParser());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
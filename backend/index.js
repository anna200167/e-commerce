import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser'
const app = express();

console.log(cookieParser)
dotenv.config();
connectDB()
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Application running on ${PORT}`);
});
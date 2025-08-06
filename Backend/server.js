import express from "express"
const app=express();
app.use(express.json());
import dotenv from "dotenv";
import { connectDB } from "./DB/connectDb.js";
dotenv.config();

connectDB();
app.listen(process.env.PORT,()=>{
    console.log("LISTENING");
})
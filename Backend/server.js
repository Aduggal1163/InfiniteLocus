import express from "express"
import dotenv from "dotenv";
import { connectDB } from "./DB/connectDb.js";
import AuthRoutes from './Routes/Auth.Routes.js';

const app=express();
dotenv.config();


app.use(express.json());
app.use("/api/v1/auth",AuthRoutes);

connectDB();
app.listen(process.env.PORT,()=>{
    console.log("Listing");
})
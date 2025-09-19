import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import  dotenv  from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors"

const app =express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.use("/",route);
app.use("/uploads", express.static("uploads"));

const PORT= process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;
  
mongoose 
         .connect(MONGOURL)
         .then(()=>{
            console.log("Connection successful")
            app.listen(PORT,()=>{
                console.log(`Server is running on :${PORT}`)
            });
         })
         .catch((error)=>{
            console.group(error)
         });
         
         

       
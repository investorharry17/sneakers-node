import express  from "express";
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import mongoose from "mongoose";

// routes
import User from "./routes/userRoutes.js";
import LearningRoutes from "./routes/learnings.js";

dotenv.config()
const server = express()

server.use(express.json())
server.use(User)
server.use("/learning/" , LearningRoutes)

server.get('/',(req,res)=> {
    console.log(req.ip);
    req.ip
    res.json({name : "Blockchain" , ip : req.ip})

})

server.use("*" , (req,res) => {
    console.log(req.path , req.route , req.url)
    res.status(404).json({route : req.url})
}) 

async function connectMongo() {
    try {
        await mongoose.connect(process.env.MONGOCONNECTIONSTRING)
        console.log("CONNECTED")
        server.listen(3000, () => {
            console.log("Server running");
        })
    } catch (error) {
        console.log(error)
    }
}
connectMongo()
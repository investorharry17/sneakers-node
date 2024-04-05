import { Router } from "express";
import UserSchema from "../schemas/userschema.js";
import LearningSchema from "../schemas/lerarningSchema.js";
import bcryt from "bcrypt"

const hashPassword = async (password) => {
    const salt = await bcryt.genSalt(10)
    const hashed = await bcryt.hash( password, salt)
    
    return hashed 
}
const User = Router()

User.get("/users" , async (req,res) => {
    const users = await UserSchema.find()
    res.json({users : users})
}) 

User.post("/user/register", async (req,res) => {
    // console.log(req.body)
    try {
        const data = req.body
        data.password = await hashPassword(req.body.password) 

         const newUser = new UserSchema(data)
         const result = await newUser.save()
        const { password , ...sendDetails } = data
        const createLearning = new LearningSchema({ ownerId : result._id })
        await createLearning.save()
         res.status(200).json({message: "Registered" , user : sendDetails })
    } catch (error) {
        res.json({message: error}).status(400)
    }
   
})

export default User
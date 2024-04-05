import { Router } from "express";
import LearningSchema from "../schemas/lerarningSchema.js";

const LearningRoutes = Router()

LearningRoutes.get("/" , async (req, res) => {
    console.log("LEARNING")
    try {
        const result = await LearningSchema.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

export default LearningRoutes
import mongoose, { Schema, mongo } from "mongoose";

const courseSchema = new Schema({
    name : String,
    owner: String,
    id : String,
    title : String
})
const schema = new Schema({
    ownerId : {
        type : String,
        required: true
    },
    registeredCourses : {
        type : [courseSchema], 
        default : []
    }
})
const LearningSchema = mongoose.model("learnings" , schema)
export default LearningSchema
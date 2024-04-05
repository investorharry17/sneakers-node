import mongoose, { Schema, mongo } from "mongoose";

const schema = new Schema({
    username : {
        type : String,
        unique : true,
        lowercase : true,
        required: true
    },
    password : {
        type : String,
        required : true,
    }, 
    email : {
        type : String,
        unique : true,
        lowercase : true
    },
    profileIcon : {
        type : String,
        default : ""
    },
    dob : {
        type : Date
     },
     role : {
        type : String,
        default : "member" // member admin
     }
})

const UserSchema = new mongoose.model("users" , schema)

export default UserSchema
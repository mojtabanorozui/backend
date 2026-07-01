import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const userShcema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name is requierd"],
        trim:true,
        minLength:2,
        maxLength:50,

    },
    email:{
        type:String,
        required:[true,"user name is requierd"],
        trim:true,
        unique:true,
        lowerCase:true,
        minLength:5,
        maxLength:220,
        match:[/\S+@\S+\S+/, 'plz filla valid email address']
        
    },
    password:{
        type:String,
        required:[true,'User password is required'],
        minLength:6,
    },
    
},{Timestamp:true})
                   
const User =mongoose.model('User',userShcema)

export default User
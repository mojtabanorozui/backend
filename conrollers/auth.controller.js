import mongoose from "mongoose"
import User from "../models/model.user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js"
export const sginUp = async (req, res ,next) => {
    const session= await mongoose.startSession()
    session.startTransaction()
    try{
         const {name,email,password}= req.body
         // cheacking if a user is alreedy exists
         const existingUser= await User.findOne({email})

         if(existingUser){
          const error = new Error  ("User already exist")
          error.statusCode=409
          throw error
         }
         const salt= await bcrypt.genSalt(10)
         const  hashedPassword= await bcrypt.hash(password,salt)
         const NewUsers = await User.create([{name,email,password:hashedPassword}],{session})
         const token= jwt.sign({userId: NewUsers[0]._id},JWT_SECRET , {expiresIn:JWT_EXPIRES_IN})
         await session.commitTransaction()
         session.endSession()

         res.status(201).json({
          success:true,
          message:"User created succsesfuly",
          data:{
               token,
              user: NewUsers[0]
          }    
          
         })
    }catch(error){
         await session.abortTransaction()
         session.endSession()
         next(error)
    }
}
export const sginIn =async(req,res,next)=>{
     try{
        const {email,password}= req.body
        const  user = await User.findOne({email})
        if(!user){
          const error = new Error("invalid email ")
          error.statusCode=404
          throw error
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
          const error = new Error("invaild passoword")
          error.statusCode=401
          throw error
        }
        const token= jwt.sign({userId: user._id},JWT_SECRET , {expiresIn:JWT_EXPIRES_IN}) 
        res.status(200).json({
          success:true,
          message:"User logged in successfully",
          data:{
               token,
               user
          }
         })
      } catch (error) {
        next(error);
      }
    };

export const sginOut = async (req, res) => {};
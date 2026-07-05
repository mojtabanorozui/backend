import mongoose from "mongoose"
import User from "../models/model.user"
export const sginUp = async (req, res) => {
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
    }catch(error){
         await session.abortTransaction()
         session.endSession()
         next(error)
    }
}
export const sginIn =async(req,res)=>{}


export const sginOut= async(req,res)=>{}
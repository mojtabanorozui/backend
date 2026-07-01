import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../../config/env.js";

if(!DB_URI){
    throw new Error("PLZ DIFE THE MANGOOS_URI ENVIROMENT VARIABLE INSIDE.ENV<DEVELOPMENT/PRODUCTION>.LOCAL")
}
const connectToDataBase= async ()=>{
    try{
        await mongoose.connect(DB_URI)
        console.log(`connected to dataBase in ${NODE_ENV} mode`)
    }catch(err){
        console.error("error connecting to database",err);
        process.exit(1)
    }finally{
        console.log("Connection attempt finished (success or fail)")
    } 
    }
    export default connectToDataBase

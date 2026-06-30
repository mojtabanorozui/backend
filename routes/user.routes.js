import { Router } from "express";

const userRouter=Router()

userRouter.get("/" ,(req,res) =>{
    res.send({title:"Get all the users"})
})
userRouter.get("/:id" ,(req,res) =>{
    res.send({title:"Get all the users"})
})
userRouter.post("/" ,(req,res) =>{
    res.send({title:"Create all the users"})
})
userRouter.put("/:id" ,(req,res) =>{
    res.send({title:"Update all the users"})
})
userRouter.delete("/:id" ,(req,res) =>{
    res.send({title:"Get all the users"})
})
export default userRouter
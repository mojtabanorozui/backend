import { Router } from "express";
const subscribers=Router()
subscribers.get("/",(req,res)=>{
    res.send("get all the subs")
})
subscribers.get("/:id",(req,res)=>{
    console.log(req.params)
    res.send({massge:"get subs",id:123})
})
subscribers.post("/",(req,res)=>{
    res.send("create the subs")
})
subscribers.put("/:id",(req,res)=>{
    res.send("Update the subs")
})
subscribers.delete("/:id",(req,res)=>{
    res.send("delete subs")
})
subscribers.get("/user/:id",(req,res)=>{
    res.send("get all the subs")
})
subscribers.put("/:id/cancel",(req,res)=>{
    res.send("cancel subs")
})
export default subscribers
const express=require("express")
const app=express()
app.get("/",(req,res)=>{
  res.json([{id:1,name:"mojtaba"},{id:2,name:"ali"}])
})
app.post('/users',(req,res)=>{
  const {name}=req.body
  res.status(201).json({id:3,name})
})
app.listen(4000)
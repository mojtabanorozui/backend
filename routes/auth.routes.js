import Router from "express"

const authRouter=Router()

authRouter.post("/sgin-up",(req,res)=>{
    res.send({massge:"sign-up"})
})
authRouter.post("/sginin",(req,res)=>{
    res.send({massge:"sigin"})
})
authRouter.post("/sginup",(req,res)=>{
    res.send({massge:"sigup"})
})
export default authRouter
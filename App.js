import express from "express"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"
import subscribers from "./routes/sub.routes.js"
const app=express()
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/subs',subscribers)
app.get("/",(req,res) =>{
    res.send("<h1> come in homies</h1>")
})

    
export default app;
import express from "express"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"
import subscribers from "./routes/sub.routes.js"
import errorMiddleware from "./middlewares/error.middlewaer.js"
import cookieParser from "cookie-parser"
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/subs',subscribers)
app.use(errorMiddleware)
app.get("/",(req,res) =>{
    res.send("<h1> come in homies</h1>")
})

    
export default app;
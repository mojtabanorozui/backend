import express from "express"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"
import subscribers from "./routes/sub.routes.js"
import errorMiddleware from "./middlewares/error.middlewaer.js"
import arcjetMiddleware from "./middlewares/arcjet.middleware.js"
import cookieParser from "cookie-parser"
import workflowRouter from "./routes/workflow.routes.js"
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(arcjetMiddleware)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/subs',subscribers)
app.use('api/v1/workflow',workflowRouter)
app.use(arcjetMiddleware)
app.get("/",(req,res) =>{
    res.send("<h1> come in homies</h1>")
})
  
    
export default app;
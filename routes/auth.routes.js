import {Router} from "express"
import { sginIn, sginOut, sginUp } from "../conrollers/auth.controller.js"

const authRouter=Router()
// Path :/api/v1/auth/sign-up (POST)
authRouter.post('/sgin-up',sginUp)
authRouter.post('/sgin-in',sginIn)
authRouter.post('/sgin-out',sginOut)
export default authRouter
import express from 'express'
import { signin, signup } from '../controller/user'
import authenticate from '../middleware/authenticate'

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)



export default userRouter
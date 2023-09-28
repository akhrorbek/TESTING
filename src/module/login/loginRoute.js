import express from 'express'
import validationMiddleware from '../../middlewares/validation.middleware.js'
import { PostLogin } from '../../validation/valdation.js'
import loginController from './login.js'

const loginRoutes = express.Router()

export default loginRoutes
    .get('/login', loginController.GET)
    .post('/login', validationMiddleware(PostLogin), loginController.POST)
import express from 'express'
import validationMiddleware from '../../middlewares/validation.middleware.js'
import { PostRoom } from '../../validation/valdation.js'
import roomController from './rooms.js'



const roomsRouter = express.Router()

export default roomsRouter
     .get('/rooms', roomController.GET)
     .post('/rooms', validationMiddleware(PostRoom), roomController.POST)
     .delete('/rooms/:id', roomController.DELETE)
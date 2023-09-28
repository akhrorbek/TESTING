import express from 'express'
import validationMiddleware from '../../middlewares/validation.middleware.js'
import { PostBank } from '../../validation/valdation.js'
import BankController from './banks.js'



const bankRouter = express.Router()

export default bankRouter
    .get('/banks', BankController.GET)
    .post('/banks', validationMiddleware(PostBank), BankController.POST)
    .delete('/banks/:id', BankController.DELETE)
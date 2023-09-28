import express from 'express'
import validationMiddleware from '../../middlewares/validation.middleware.js'
import { PostComplex } from '../../validation/valdation.js'
import complexController from './complexes.js'



const complexRouter = express.Router()

export default complexRouter
    .get('/complexes', complexController.GET)
    .post('/complexes', validationMiddleware(PostComplex), complexController.POST)
    .delete('/complexes/:id', complexController.DELETE)
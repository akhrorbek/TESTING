import express from 'express'
import validationMiddleware from '../../middlewares/validation.middleware.js'
import { PostCompany } from '../../validation/valdation.js'
import CompanyController from './companies.js'



const companyRouter = express.Router()

export default companyRouter
    .get('/companies', CompanyController.GET)
    .post('/companies', validationMiddleware(PostCompany), CompanyController.POST)
    .delete('/companies/:id', CompanyController.DELETE)
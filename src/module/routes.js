import express from 'express';
import companyRoutes from './companies/companyRoutes.js'
import complexRouter from './complexes/complexRoutes.js'
import roomRoute from './rooms/roomRoutes.js';
import bankRoutes from './banks/bankRoutes.js';

const router = express.Router()

export default router
    .use('/admin', companyRoutes)
    .use('/admin', complexRouter)
    .use('/admin', roomRoute)
    .use('/admin', bankRoutes)
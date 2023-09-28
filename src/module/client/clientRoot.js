import express from 'express'
import clientController from './client.js'

const clientRoot = express.Router()

export default clientRoot
    .get('/client', clientController.GET)
    .post('/client', clientController.POST)
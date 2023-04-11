import express from 'express'
import { createBrand, getBrand } from '../controller/brand'

const brandRouter = express.Router()

brandRouter.get('/brands', getBrand)
brandRouter.post('/brands', createBrand)

export default brandRouter
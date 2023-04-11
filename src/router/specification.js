import express from 'express'
import { createSpec, getSpec } from '../controller/specification'

const speciRouter = express.Router()

speciRouter.get('/specifications', getSpec)
speciRouter.post('/specifications', createSpec)

export default speciRouter
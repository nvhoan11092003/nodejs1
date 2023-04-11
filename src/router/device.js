import express from "express";
import { createDevice, getDeviceAll, getDeviceById, removeDevice, updateDevice } from "../controller/device";
import authenticate from "../middleware/authenticate";

const deviceRouter = express.Router()

deviceRouter.get('/products', getDeviceAll)
deviceRouter.get('/products/:id', getDeviceById)
deviceRouter.post('/products', authenticate, createDevice)
deviceRouter.put('/products/:id', authenticate, updateDevice)
deviceRouter.delete('/products/:id', authenticate, removeDevice)
export default deviceRouter
import express from 'express';
import { create, getAll } from '../controller/invoice';

const invoiceRouter = express.Router();
invoiceRouter.post("/invoices", create)
invoiceRouter.get("/invoices", getAll)
export default invoiceRouter
import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/user";
import bodyParser from "body-parser";
import invoiceRouter from "./router/invoice";
import deviceRouter from "./router/device";

import brandRouter from "./router/brand.js";
import speciRouter from "./router/specification";

const app = express();
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// Logger
// app.use(morgan("combined"))

// Static file
// app.use(express.static(path.join(__dirname, "public")))
// Router
app.use("/auth", userRouter);
app.use("/api", deviceRouter);
app.use("/api", invoiceRouter);
app.use("/api", brandRouter);
app.use("/api", speciRouter);

mongoose.connect("mongodb://127.0.0.1:27017/ASM2").then(() => {
  console.log("Connected seccessfully");
});
app.listen(8000, () => {
  console.log("sever is running on 8000");
});

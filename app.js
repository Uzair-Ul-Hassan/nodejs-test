import express from "express";

import vendorRouter from "./routes/vendorRouter.js";

const app = express();

app.use(express.json());

app.use("/api/getVendorUsers", vendorRouter);

export default app;

import express from "express";

import vendorController from "../controllers/vendorController.js";

const router = express.Router();

// GET /api/getVendorUsers
router.get("/", vendorController.getVendorUsers);

export default router;

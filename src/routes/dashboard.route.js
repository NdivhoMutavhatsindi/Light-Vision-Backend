import express from "express";
import { getAdminDashboard } from "../controllers/dashboard.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectAdmin, getAdminDashboard);

export default router;

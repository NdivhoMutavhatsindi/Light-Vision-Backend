import express from "express";

import * as complianceController from "../controllers/compliance.controller.js";
import {protectAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  complianceController.createComplianceRequest
);

router.get(
  "/",
  protectAdmin,
  complianceController.getAllComplianceRequests
);

router.get(
  "/:id",
  protectAdmin,
  complianceController.getComplianceRequestById
);

router.patch(
  "/:id/status",
  protectAdmin,
  complianceController.updateComplianceRequestStatus
);

export default router;      
import express from "express";

import * as valuationController from "../controllers/valuation.controller.js";
import {protectAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  valuationController.createValuationRequest
);

router.get(
  "/",
  protectAdmin,
  valuationController.getAllValuationRequests
);

router.get(
  "/:id",
  protectAdmin,
  valuationController.getValuationRequestById
);

router.patch(
  "/:id/status",
  protectAdmin,
  valuationController.updateValuationRequestStatus
);

export default router;          
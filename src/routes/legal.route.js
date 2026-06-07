import express from "express";

import * as legalController from "../controllers/legal.controller.js";
import {protectAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  legalController.createLegalRequest
);

router.get(
  "/",
  protectAdmin,
  legalController.getAllLegalRequests
);

router.get(
  "/:id",
  protectAdmin,
  legalController.getLegalRequestById
);

router.patch(
  "/:id/status",
  protectAdmin,
  legalController.updateLegalRequestStatus
);

export default router;              
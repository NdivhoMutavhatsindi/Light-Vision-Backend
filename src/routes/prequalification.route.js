import express from "express";

import * as prequalificationController from "../controllers/prequalification.controller.js";
import {protectAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  prequalificationController.createPrequalificationApplication
);

router.get(
  "/",
  protectAdmin,
  prequalificationController.getAllPrequalificationApplications
);

router.get(
  "/:id",
  protectAdmin,
  prequalificationController.getPrequalificationApplicationById
);

router.patch(
  "/:id/status",
  protectAdmin,
  prequalificationController.updatePrequalificationApplicationStatus
);

export default router;  
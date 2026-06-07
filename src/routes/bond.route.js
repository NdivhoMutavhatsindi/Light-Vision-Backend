import express from "express";

import * as bondController from "../controllers/bond.controller.js";

import {protectAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  bondController.createBondApplication
);

router.get(
  "/",
  protectAdmin,
  bondController.getAllBondApplications
);

router.get(
  "/:id",
  protectAdmin,
  bondController.getBondApplicationById
);

router.patch(
  "/:id/status",
  protectAdmin,
  bondController.updateBondApplicationStatus
);

export default router;
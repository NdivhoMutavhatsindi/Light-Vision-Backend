import express from "express";

import * as careerController
from "../controllers/career.controller.js";

import { protectAdmin }
from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protectAdmin,
  careerController.createCareer
);

router.patch(
  "/:id",
  protectAdmin,
  careerController.updateCareer
);

router.delete(
  "/:id",
  protectAdmin,
  careerController.deleteCareer
);

router.get(
  "/",
  careerController.getAllCareers
);

router.get(
  "/:id",
  careerController.getCareerById
);

export default router;
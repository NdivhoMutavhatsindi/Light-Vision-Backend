import express from "express";

import * as jobApplicationController
  from "../controllers/jobApplication.controller.js";

import { protectAdmin }
  from "../middleware/auth.middleware.js";

import { uploadCV }
  from "../middleware/upload.middleware.js";

const router = express.Router();

router.post(
  "/",
  uploadCV,
  jobApplicationController.createJobApplication
);

router.get(
  "/",
  protectAdmin,
  jobApplicationController.getAllJobApplications
);

router.get(
  "/:id",
  protectAdmin,
  jobApplicationController.getJobApplicationById
);

router.patch(
  "/:id/status",
  protectAdmin,
  jobApplicationController.updateJobApplicationStatus
);

export default router;
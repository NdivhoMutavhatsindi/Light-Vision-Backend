import express from "express";

import * as inquiryController from "../controllers/inquiry.controller.js";
import {protectAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  inquiryController.createPropertyInquiry
);

router.get(
  "/",
  protectAdmin,
  inquiryController.getAllPropertyInquiries
);

router.get(
  "/:id",
  protectAdmin,
  inquiryController.getPropertyInquiryById
);

router.patch(
  "/:id/status",
  protectAdmin,
  inquiryController.updatePropertyInquiryStatus
);

export default router;          
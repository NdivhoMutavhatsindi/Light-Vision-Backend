import express from "express";

import * as adminInquiryController from "../controllers/adminInquiry.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  protectAdmin,
  adminInquiryController.getAllInquiries
);

router.get(
  "/:id",
  protectAdmin,
  adminInquiryController.getInquiry
);

router.patch(
  "/:id",
  protectAdmin,
  adminInquiryController.updateInquiryStatus
);

export default router;

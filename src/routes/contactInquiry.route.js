import express from "express";

import * as contactInquiryController from "../controllers/contactInquiry.controller.js";

const router = express.Router();

router.post(
  "/",
  contactInquiryController.createContactInquiry
);

export default router;

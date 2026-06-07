import express from "express";

import * as offerController
  from "../controllers/offer.controller.js";

import { protectAdmin }
  from "../middleware/auth.middleware.js";

import { uploadOffer }
  from "../middleware/upload.middleware.js";

const router = express.Router();

router.post(
  "/",
  uploadOffer,
  offerController.createOffer
);

router.get(
  "/",
  protectAdmin,
  offerController.getAllOffers
);

router.get(
  "/:id",
  protectAdmin,
  offerController.getOfferById
);

router.patch(
  "/:id/status",
  protectAdmin,
  offerController.updateOfferStatus
);

export default router;  
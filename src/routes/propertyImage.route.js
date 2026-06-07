import express from "express";

import * as propertyImageController
from "../controllers/propertyImage.controller.js";

import upload
from "../middleware/uploadIMG.middleware.js";

import { protectAdmin }
from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/:id/images",
  protectAdmin,

  upload.array("images", 10),

  propertyImageController.uploadPropertyImages
);

router.get(
  "/:id/images",
  propertyImageController.getPropertyImages
);

router.delete(
  "/:id/images/:imageId",
  protectAdmin,
  propertyImageController.deletePropertyImage
);

export default router;
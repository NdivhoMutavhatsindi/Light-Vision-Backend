import express from "express";

import * as propertyController
from "../controllers/property.controller.js";

import { protectAdmin }
from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protectAdmin,
  propertyController.createProperty
);

router.patch(
  "/:id",
  protectAdmin,
  propertyController.updateProperty
);

router.delete(
  "/:id",
  protectAdmin,
  propertyController.deleteProperty
);

router.get(
  "/",
  propertyController.getAllProperties
);

router.get(
  "/:id",
  propertyController.getPropertyById
);

export default router;
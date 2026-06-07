import express from "express";

import * as publicPropertyController
from "../controllers/publicProperty.controller.js";

const router = express.Router();

router.get(
  "/",
  publicPropertyController.getProperties
);

router.get(
  "/:id",
  publicPropertyController.getPropertyById
);

router.get(
  "/:id/similar",
  publicPropertyController.getSimilarProperties
);

export default router;

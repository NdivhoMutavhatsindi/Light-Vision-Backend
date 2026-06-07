import express from "express";

import * as agentController
from "../controllers/agent.controller.js";

import upload
from "../middleware/uploadIMG.middleware.js";

import { protectAdmin }
from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/upload",
  protectAdmin,
  upload.single("image"),
  (req, res, next) => {
    console.log('ROUTE upload middleware req.file:', req.file);
    next();
  },
  agentController.uploadAgentImage
);

router.post(
  "/",
  protectAdmin,
  upload.single("image"),
  agentController.createAgent
);

router.patch(
  "/:id",
  protectAdmin,
  upload.single("image"),
  agentController.updateAgent
);

router.get(
  "/",
  agentController.getAllAgents
);

router.get(
  "/:id",
  agentController.getAgentById
);

export default router;  
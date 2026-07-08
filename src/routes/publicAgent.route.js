import express from "express";

import * as agentController from "../controllers/agent.controller.js";

const router = express.Router();

router.get("/", agentController.getAllAgents);
router.get("/:id", agentController.getAgentById);

export default router;

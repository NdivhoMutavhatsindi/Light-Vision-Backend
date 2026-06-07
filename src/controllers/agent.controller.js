import * as agentService
  from "../services/agent.service.js";

import { successResponse }
  from "../util/response.js";

export const createAgent =
  async (req, res, next) => {

    try {

      const agent =
        await agentService.createAgent(
          req.body,
          req.file
        );

      return successResponse(
        res,
        "Agent created successfully",
        agent,
        201
      );

    } catch (error) {

      next(error);
    }
  };

export const getAllAgents =
  async (req, res, next) => {

    try {

      const agents =
        await agentService.getAllAgents();

      return successResponse(
        res,
        "Agents fetched successfully",
        agents
      );

    } catch (error) {

      next(error);
    }
  };

export const getAgentById =
  async (req, res, next) => {

    try {

      const agent =
        await agentService.getAgentById(
          req.params.id
        );

      return successResponse(
        res,
        "Agent fetched successfully",
        agent
      );

    } catch (error) {

      next(error);
    }
  };

export const updateAgent =
  async (req, res, next) => {

    try {

      const agent =
        await agentService.updateAgent(
          req.params.id,
          req.body,
          req.file
        );

      return successResponse(
        res,
        "Agent updated successfully",
        agent
      );

    } catch (error) {

      next(error);
    }
  };

export const uploadAgentImage =
  async (req, res, next) => {

    console.log('UPLOAD ROUTE content-type:', req.headers['content-type']);
    console.log('UPLOAD ROUTE file:', req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file attached',
        contentType: req.headers['content-type'],
      });
    }

    try {

      const imageUrl =
        await agentService.uploadAgentImage(
          req.file
        );

      return successResponse(
        res,
        "Image uploaded successfully",
        imageUrl
      );

    } catch (error) {

      next(error);
    }
  };

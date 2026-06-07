import * as bondService from "../services/bond.service.js";

import { successResponse } from "../util/response.js";

export const createBondApplication =
  async (req, res, next) => {
    try {
      const application =
        await bondService.createBondApplication(
          req.body
        );

      return successResponse(
        res,
        "Bond application submitted successfully",
        application,
        201
      );
    } catch (error) {
      next(error);
    }
  };

export const getAllBondApplications =
  async (req, res, next) => {
    try {
      const applications =
        await bondService.getAllBondApplications();

      return successResponse(
        res,
        "Bond applications fetched successfully",
        applications
      );
    } catch (error) {
      next(error);
    }
  };

export const getBondApplicationById =
  async (req, res, next) => {
    try {
      const application =
        await bondService.getBondApplicationById(
          req.params.id
        );

      return successResponse(
        res,
        "Bond application fetched successfully",
        application
      );
    } catch (error) {
      next(error);
    }
  };

export const updateBondApplicationStatus =
  async (req, res, next) => {
    try {
      const application =
        await bondService.updateBondApplicationStatus(
          req.params.id,
          req.body.status
        );

      return successResponse(
        res,
        "Bond application updated successfully",
        application
      );
    } catch (error) {
      next(error);
    }
  };
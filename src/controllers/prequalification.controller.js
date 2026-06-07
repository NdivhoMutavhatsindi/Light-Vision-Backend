import * as prequalificationService from  "../services/prequalification.service.js";

import { successResponse } from "../util/response.js";

export const createPrequalificationApplication =
  async (req, res, next) => {
    try {
      const application =
        await prequalificationService.createPrequalificationApplication(
          req.body
        );

      return successResponse(
        res,
        "Pre-qualification application submitted successfully",
        application,
        201
      );
    } catch (error) {
      next(error);
    }
  };

  export const getAllPrequalificationApplications =
    async (req, res, next) => {
      try {
        const applications =
          await prequalificationService.getAllPrequalificationApplications();
  
        return successResponse(
          res,
          "Pre-qualification applications fetched successfully",
          applications
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const getPrequalificationApplicationById =
    async (req, res, next) => {
      try {
        const application =
          await prequalificationService.getPrequalificationApplicationById(
            req.params.id
          );
  
        return successResponse(
          res,
          "Pre-qualification application fetched successfully",
          application
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const updatePrequalificationApplicationStatus =
    async (req, res, next) => {
      try {
        const application =
          await prequalificationService.updatePrequalificationApplicationStatus(
            req.params.id,
            req.body.status
          );
  
        return successResponse(
          res,
          "Pre-qualification application updated successfully",
          application
        );
      } catch (error) {
        next(error);
      }
    };  
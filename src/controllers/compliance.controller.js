import * as complianceService from "../services/compliance.service.js";

import { successResponse } from "../util/response.js";

export const createComplianceRequest =
  async (req, res, next) => {
    try {
      const request =
        await complianceService.createComplianceRequest(
          req.body
        );

      return successResponse(
        res,
        "Compliance request submitted successfully",
        request,
        201
      );
    } catch (error) {
      next(error);
    }
  };

  export const getAllComplianceRequests =
    async (req, res, next) => {
      try {
        const requests =
          await complianceService.getAllComplianceRequests();
  
        return successResponse(
          res,
          "Compliance requests fetched successfully",
          requests
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const getComplianceRequestById =
    async (req, res, next) => {
      try {
        const request =
          await complianceService.getComplianceRequestById(
            req.params.id
          );
  
        return successResponse(
          res,
          "Compliance request fetched successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const updateComplianceRequestStatus =
    async (req, res, next) => {
      try {
        const request =
          await complianceService.updateComplianceRequestStatus(
            req.params.id,
            req.body.status
          );
  
        return successResponse(
          res,
          "Compliance request updated successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };      
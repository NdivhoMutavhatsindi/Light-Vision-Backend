import * as valuationService from "../services/valuation.service.js";

import { successResponse } from "../util/response.js";

export const createValuationRequest =
  async (req, res, next) => {
    try {
      const request =
        await valuationService.createValuationRequest(
          req.body
        );

      return successResponse(
        res,
        "Valuation request submitted successfully",
        request,
        201
      );
    } catch (error) {
      next(error);
    }
  };

  export const getAllValuationRequests =
    async (req, res, next) => {
      try {
        const requests =
          await valuationService.getAllValuationRequests();
  
        return successResponse(
          res,
          "Valuation requests fetched successfully",
          requests
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const getValuationRequestById =
    async (req, res, next) => {
      try {
        const request =
          await valuationService.getValuationRequestById(
            req.params.id
          );
  
        return successResponse(
          res,
          "Valuation request fetched successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const updateValuationRequestStatus =
    async (req, res, next) => {
      try {
        const request =
          await valuationService.updateValuationRequestStatus(
            req.params.id,
            req.body.status
          );
  
        return successResponse(
          res,
          "Valuation request updated successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };          
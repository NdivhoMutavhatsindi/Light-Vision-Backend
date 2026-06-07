import * as legalService from "../services/legal.service.js";

import { successResponse } from "../util/response.js";

export const createLegalRequest =
  async (req, res, next) => {
    try {
      const request =
        await legalService.createLegalRequest(
          req.body
        );

      return successResponse(
        res,
        "Legal request submitted successfully",
        request,
        201
      );
    } catch (error) {
      next(error);
    }
  };

  export const getAllLegalRequests =
    async (req, res, next) => {
      try {
        const requests =
          await legalService.getAllLegalRequests();
  
        return successResponse(
          res,
          "Legal requests fetched successfully",
          requests
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const getLegalRequestById =
    async (req, res, next) => {
      try {
        const request =
          await legalService.getLegalRequestById(
            req.params.id
          );
  
        return successResponse(
          res,
          "Legal request fetched successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const updateLegalRequestStatus =
    async (req, res, next) => {
      try {
        const request =
          await legalService.updateLegalRequestStatus(
            req.params.id,
            req.body.status
          );
  
        return successResponse(
          res,
          "Legal request updated successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };              
import * as careerService from "../services/career.service.js";

import { successResponse } from "../util/response.js";

export const createCareer =
  async (req, res, next) => {
    try {
      const request =
        await careerService.createCareer(
          req.body
        );

      return successResponse(
        res,
        "Career request submitted successfully",
        request,
        201
      );
    } catch (error) {
      next(error);
    }
  };

  export const getAllCareers =
    async (req, res, next) => {
      try {
        const requests =
          await careerService.getAllCareers();
  
        return successResponse(
          res,
          "Career requests fetched successfully",
          requests
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const getCareerById =
    async (req, res, next) => {
      try {
        const request =
          await careerService.getCareerById(
            req.params.id
          );
  
        return successResponse(
          res,
          "Career request fetched successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const updateCareer =
    async (req, res, next) => {
      try {
        const request =
          await careerService.updateCareer(
            req.params.id,
            req.body
          );

        return successResponse(
          res,
          "Career request updated successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };

    export const deleteCareer = async (req, res, next) => {
    try {
      const request = await careerService.deleteCareer(req.params.id);
      return successResponse(
        res,
        "Career request deleted successfully",
        request
      );
    } catch (error) {
      next(error);
    }
  };
import * as propertyService from "../services/property.service.js";

import { successResponse } from "../util/response.js";

export const createProperty =
  async (req, res, next) => {
    try {
      const request =
        await propertyService.createProperty(
          req.body
        );

      return successResponse(
        res,
        "Property created successfully",
        request,
        201
      );
    } catch (error) {
      next(error);
    }
  };

  export const getAllProperties =
    async (req, res, next) => {
      try {
        const requests =
          await propertyService.getAllProperties();
  
        return successResponse(
          res,
          "Property requests fetched successfully",
          requests
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const getPropertyById =
    async (req, res, next) => {
      try {
        const request =
          await propertyService.getPropertyById(
            req.params.id
          );
  
        return successResponse(
          res,
          "Property request fetched successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const updateProperty =
    async (req, res, next) => {
      try {
        const request =
          await propertyService.updateProperty(
            req.params.id,
            req.body
          );
  
        return successResponse(
          res,
          "Property updated successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };
    
    export const deleteProperty = async (req, res, next) => {
    try {
      const request = await propertyService.deleteProperty(req.params.id);
      return successResponse(
        res,
        "Property request deleted successfully",
        request
      );
    } catch (error) {
      next(error);
    }
  };    
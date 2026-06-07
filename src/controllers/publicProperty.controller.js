import * as propertyService from "../services/property.service.js";

import { successResponse } from "../util/response.js";

export const getProperties =
  async (req, res, next) => {
    try {
      const properties = await propertyService.getAllProperties();
      return successResponse(res, "Properties fetched successfully", properties);
    } catch (error) {
      next(error);
    }
  };

export const getPropertyById =
  async (req, res, next) => {
    try {
      const property = await propertyService.getPropertyById(req.params.id);

      if (!property) {
        return successResponse(res, "Property not found", null, 404);
      }

      return successResponse(res, "Property fetched successfully", property);
    } catch (error) {
      next(error);
    }
  };

export const getSimilarProperties =
  async (req, res, next) => {
    try {
      const properties = await propertyService.getSimilarProperties(req.params.id);
      return successResponse(res, "Similar properties fetched successfully", properties);
    } catch (error) {
      next(error);
    }
  };

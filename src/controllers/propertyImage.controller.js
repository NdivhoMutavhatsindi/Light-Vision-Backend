import * as propertyImageService
from "../services/propertyImage.service.js";

import { successResponse }
from "../util/response.js";

export const uploadPropertyImages =
  async (req, res, next) => {

    try {

      const images =
        await propertyImageService.uploadPropertyImages(
          req.params.id,
          req.files
        );

      return successResponse(
        res,
        "Images uploaded successfully",
        images
      );

    } catch (error) {
      next(error);
    }
  };

export const getPropertyImages = async (req, res, next) => {
  try {
    const images = await propertyImageService.getPropertyImages(req.params.id);
    return successResponse(res, "Property images fetched successfully", images);
  } catch (error) {
    next(error);
  }
};

export const deletePropertyImage =
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const image = await propertyImageService.deletePropertyImage(id);

      return successResponse(
        res,
        "Image deleted successfully",
        image
      );
    } catch (error) {
      next(error);
    }
  };
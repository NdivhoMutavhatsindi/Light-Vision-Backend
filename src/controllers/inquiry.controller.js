import * as inquiryService from "../services/inquiry.service.js";

import { successResponse } from "../util/response.js";

export const createPropertyInquiry =
  async (req, res, next) => {
    try {
      const request =
        await inquiryService.createPropertyInquiry(
          req.body
        );

      return successResponse(
        res,
        "Property inquiry submitted successfully",
        request,
        201
      );
    } catch (error) {
      next(error);
    }
  };

  export const getAllPropertyInquiries =
    async (req, res, next) => {
      try {
        const requests =
          await inquiryService.getAllPropertyInquiries();
  
        return successResponse(
          res,
          "Property inquiries fetched successfully",
          requests
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const getPropertyInquiryById =
    async (req, res, next) => {
      try {
        const request =
          await inquiryService.getPropertyInquiryById(
            req.params.id
          );
  
        return successResponse(
          res,
          "Property inquiry fetched successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };
  
  export const updatePropertyInquiryStatus =
    async (req, res, next) => {
      try {
        const request =
          await inquiryService.updatePropertyInquiryStatus(
            req.params.id,
            req.body.status
          );
  
        return successResponse(
          res,
          "Property inquiry updated successfully",
          request
        );
      } catch (error) {
        next(error);
      }
    };          
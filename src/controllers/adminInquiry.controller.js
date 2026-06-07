import * as adminInquiryService from "../services/adminInquiry.service.js";
import { successResponse } from "../util/response.js";

export const getAllInquiries = async (req, res, next) => {
  try {
    const inquiries = await adminInquiryService.getAllInquiries();

    return successResponse(
      res,
      "Inquiries fetched successfully",
      inquiries
    );
  } catch (error) {
    next(error);
  }
};

export const getInquiry = async (req, res, next) => {
  try {
    const inquiry = await adminInquiryService.getInquiry(req.params.id);

    return successResponse(
      res,
      "Inquiry fetched successfully",
      inquiry
    );
  } catch (error) {
    next(error);
  }
};

export const updateInquiryStatus = async (req, res, next) => {
  try {
    const inquiry = await adminInquiryService.updateInquiryStatus(
      req.params.id,
      req.body.status
    );

    return successResponse(
      res,
      "Inquiry status updated successfully",
      inquiry
    );
  } catch (error) {
    next(error);
  }
};

import * as contactInquiryService from "../services/contactInquiry.service.js";
import { successResponse } from "../util/response.js";

export const createContactInquiry = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      const error = new Error("Name, email and message are required.");
      error.statusCode = 400;
      throw error;
    }

    const inquiry = await contactInquiryService.createContactInquiry(req.body);

    return successResponse(
      res,
      "Contact inquiry submitted successfully",
      inquiry,
      201
    );
  } catch (error) {
    next(error);
  }
};

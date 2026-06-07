import * as inquiryRepository from "../repositories/inquiry.repository.js";

import prisma from "../config/database.js";

export const createPropertyInquiry = async ( payload ) => {
    const inquiry = await inquiryRepository.createPropertyInquiry(payload);

    await prisma.clientRequest.create({
        data: {
            request_type: "property_inquiry",
            reference_id: inquiry.inquiry_id,
            client_email: inquiry.email,
            status: "pending",
        },
    });

    return inquiry;
};

export const getAllPropertyInquiries =
  async () => {
    return await inquiryRepository.getAllPropertyInquiries();
  };

export const getPropertyInquiryById =
  async (id) => {
    return await inquiryRepository.getPropertyInquiryById(
      id
    );
  };

export const updatePropertyInquiryStatus =
  async (id, status) => {
    return await inquiryRepository.updatePropertyInquiryStatus(
      id,
      status
    );
  };
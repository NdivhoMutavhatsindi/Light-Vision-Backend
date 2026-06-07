import * as contactInquiryRepository from "../repositories/contactInquiry.repository.js";

export const createContactInquiry = async (payload) => {
  return await contactInquiryRepository.createContactInquiry(payload);
};

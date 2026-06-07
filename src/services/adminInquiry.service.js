import * as adminInquiryRepository from "../repositories/adminInquiry.repository.js";

export const getAllInquiries = async () => {
  return await adminInquiryRepository.getAllInquiries();
};

export const getInquiry = async (id) => {
  return await adminInquiryRepository.getInquiry(id);
};

export const updateInquiryStatus = async (id, status) => {
  return await adminInquiryRepository.updateInquiryStatus(id, status);
};

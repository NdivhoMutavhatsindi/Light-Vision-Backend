import prisma from "../config/database.js";

export const createPropertyInquiry = async (data) => {
  return await prisma.propertyInquiry.create({
    data,
  });
};

export const getAllPropertyInquiries = async () => {
  return await prisma.propertyInquiry.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getPropertyInquiryById = async (id) => {
  return await prisma.propertyInquiry.findUnique({
    where: {
      inquiry_id: id,
    },
  });
};

export const updatePropertyInquiryStatus = async (
  id,
  status
) => {
  return await prisma.propertyInquiry.update({
    where: {
      inquiry_id: id,
    },
    data: {
      status,
    },
  });
};
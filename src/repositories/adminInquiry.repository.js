import prisma from "../config/database.js";

export const getAllInquiries = async () => {
  return await prisma.contactInquiry.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getInquiry = async (id) => {
  return await prisma.contactInquiry.findUnique({
    where: {
      inquiry_id: id,
    },
  });
};

export const updateInquiryStatus = async (id, status) => {
  return await prisma.contactInquiry.update({
    where: {
      inquiry_id: id,
    },
    data: {
      status,
    },
  });
};

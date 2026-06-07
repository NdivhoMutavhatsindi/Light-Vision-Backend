import prisma from "../config/database.js";

export const createContactInquiry = async (data) => {
  return await prisma.contactInquiry.create({
    data,
  });
};

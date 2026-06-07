import prisma from "../config/database.js";

export const createLegalRequest = async (data) => {
  return await prisma.legalRequest.create({
    data,
  });
};

export const getAllLegalRequests = async () => {
  return await prisma.legalRequest.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getLegalRequestById = async (id) => {
  return await prisma.legalRequest.findUnique({
    where: {
      legal_request_id: id,
    },
  });
};

export const updateLegalRequestStatus = async (
  id,
  status
) => {
  return await prisma.legalRequest.update({
    where: {
      legal_request_id: id,
    },
    data: {
      status,
    },
  });
};


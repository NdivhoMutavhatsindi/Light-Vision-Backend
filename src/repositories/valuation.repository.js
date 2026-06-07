import prisma from "../config/database.js";

export const createValuationRequest = async (data) => {
  return await prisma.valuationRequest.create({
    data,
  });
};

export const getAllValuationRequests = async () => {
  return await prisma.valuationRequest.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getValuationRequestById = async (id) => {
  return await prisma.valuationRequest.findUnique({
    where: {
      valuation_request_id: id,
    },
  });
};

export const updateValuationRequestStatus = async (
  id,
  status
) => {
  return await prisma.valuationRequest.update({
    where: {
      valuation_request_id: id,
    },
    data: {
      status,
    },
  });
};


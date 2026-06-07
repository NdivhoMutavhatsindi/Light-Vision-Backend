import prisma from "../config/database.js";

export const createComplianceRequest = async (data) => {
  return await prisma.complianceRequest.create({
    data,
  });
};

export const getAllComplianceRequests = async () => {
  return await prisma.complianceRequest.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getComplianceRequestById = async (id) => {
  return await prisma.complianceRequest.findUnique({
    where: {
      compliance_request_id: id,
    },
  });
};

export const updateComplianceRequestStatus = async (
  id,
  status
) => {
  return await prisma.complianceRequest.update({
    where: {
      compliance_request_id: id,
    },
    data: {
      status,
    },
  });
};


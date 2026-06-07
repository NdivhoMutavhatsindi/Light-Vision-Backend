import prisma from "../config/database.js";

export const createPrequalificationApplication = async (data) => {
  return await prisma.prequalificationApplication.create({
    data,
  });
}

export const getAllPrequalificationApplications = async () => {
  return await prisma.prequalificationApplication.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getPrequalificationApplicationById = async (id) => {
  return await prisma.prequalificationApplication.findUnique({
    where: {
      prequalification_application_id: id,
    },
  });
};

export const updatePrequalificationApplicationStatus = async (
  id,
  status
) => {
  return await prisma.prequalificationApplication.update({
    where: {
      prequalification_application_id: id,
    },
    data: {
      status,
    },
  });
};
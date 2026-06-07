import prisma from "../config/database.js";

export const createBondApplication = async (data) => {
  return await prisma.bondApplication.create({
    data,
  });
};

export const getAllBondApplications = async () => {
  return await prisma.bondApplication.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getBondApplicationById = async (id) => {
  return await prisma.bondApplication.findUnique({
    where: {
      bond_application_id: id,
    },
  });
};

export const updateBondApplicationStatus = async (
  id,
  status
) => {
  return await prisma.bondApplication.update({
    where: {
      bond_application_id: id,
    },
    data: {
      status,
    },
  });
};
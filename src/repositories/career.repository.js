import prisma from "../config/database.js";

export const createCareer = async (data) => {
  return await prisma.career.create({
    data,
  });
};

export const getAllCareers = async () => {
  return await prisma.career.findMany({
    where: {
      is_active: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getCareerById = async (id) => {
  return await prisma.career.findUnique({
    where: {
      career_id: id,
    },
  });
};

export const updateCareer = async (id, data) => {
  return await prisma.career.update({
    where: {
      career_id: id,
    },
    data,
  });
};

export const deleteCareer = async (id) => {
  return await prisma.career.delete({
    where: {
      career_id: id,
    },
  });
};

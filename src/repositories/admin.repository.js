import prisma from "../config/database.js";

export const findAdminByEmail = async (email) => {
  return await prisma.admin.findUnique({
    where: {
      email
    }
  });
};

export const findAdminById = async (admin_id) => {
  return await prisma.admin.findUnique({
    where: {
      admin_id
    }
  });
};
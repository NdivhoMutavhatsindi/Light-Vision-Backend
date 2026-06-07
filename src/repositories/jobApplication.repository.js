import prisma from "../config/database.js";

export const createJobApplication =
  async (data) => {

    return await prisma.jobApplication.create({
      data,
    });
  };

export const getAllJobApplications =
  async () => {

    return await prisma.jobApplication.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
  };

export const getJobApplicationById =
  async (id) => {

    return await prisma.jobApplication.findUnique({
      where: {
        application_id: id,
      },
    });
  };

export const updateJobApplicationStatus =
  async (id, status) => {

    return await prisma.jobApplication.update({
      where: {
        application_id: id,
      },

      data: {
        status,
      },
    });
  };
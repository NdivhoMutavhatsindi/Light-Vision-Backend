import prisma from "../config/database.js";

export const createAgent =
  async (data) => {

    return await prisma.agent.create({
      data,
    });
  };

export const getAllAgents =
  async () => {

    return await prisma.agent.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
  };

export const getAgentById =
  async (id) => {

    return await prisma.agent.findUnique({
      where: {
        agent_id: id,
      },
    });
  };

export const updateAgent = async (id, data) => {
  return await prisma.agent.update({
    where: {
      agent_id: id,
    },
    data,
  });
};
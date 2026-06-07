import * as careerRepository from "../repositories/career.repository.js";
import prisma from "../config/database.js";

export const createCareer = async (payload) => {
  const career = await careerRepository.createCareer(payload);
  return career;
};

export const getAllCareers =
  async () => {
    return await careerRepository.getAllCareers();
  };

export const getCareerById =
  async (id) => {
    return await careerRepository.getCareerById(
      id
    );
  };

export const updateCareer =
  async (id, payload) => {
    return await careerRepository.updateCareer(
      id,
      payload
    );
  };

export const deleteCareer =
  async (id) => {
    return await careerRepository.deleteCareer(id);
  };

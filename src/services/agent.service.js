import * as agentRepository from "../repositories/agent.repository.js";

import {uploadImage} from "../helper/uploadIMG.helper.js";

export const createAgent = async (payload, file) => {
  const data = {
    ...payload,
  };

  if (file) {
    const result = await uploadImage(file.buffer);
    data.profile_image = result.secure_url;
  }

  if (!data.profile_image) {
    throw new Error("Profile picture is required");
  }

  const agent = await agentRepository.createAgent(data);
  return agent;
}

export const uploadAgentImage = async (file) => {
  if (!file) {
    throw new Error("Image file is required");
  }

  const result = await uploadImage(file.buffer);
  return result.secure_url;
};

export const getAllAgents = async () => {
  return await agentRepository.getAllAgents();
};

export const getAgentById = async (id) => {
  return await agentRepository.getAgentById(id);
};

export const updateAgent = async (id, payload, file) => {
  let profile_image;

  if (file) {
    const result = await uploadImage(file.buffer);
    profile_image = result.secure_url;
  }

  const updatedAgent = await agentRepository.updateAgent(id, {
    ...payload,
    ...(profile_image && { profile_image }),
  });

  return updatedAgent;
};
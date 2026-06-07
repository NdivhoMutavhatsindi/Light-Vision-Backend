import * as prequalificationRepository from "../repositories/prequalification.repository.js";

import prisma from "../config/database.js";

export const createPrequalificationApplication = async ( payload ) => {
    const application = await prequalificationRepository.createPrequalificationApplication(payload);

    await prisma.clientRequest.create({
        data: {
            request_type: "prequalification_application",
            reference_id: application.prequalification_id,
            client_email: application.email,
            status: "pending",
        },
    });
    return application;
};

export const getAllPrequalificationApplications =
  async () => {
    return await prequalificationRepository.getAllPrequalificationApplications();
  };

export const getPrequalificationApplicationById =
  async (id) => {
    return await prequalificationRepository.getPrequalificationApplicationById(
      id
    );
  };

export const updatePrequalificationApplicationStatus =
  async (id, status) => {
    return await prequalificationRepository.updatePrequalificationApplicationStatus(
      id,
      status
    );
  };    
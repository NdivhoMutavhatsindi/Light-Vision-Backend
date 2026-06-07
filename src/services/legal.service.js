import * as legalRepository from "../repositories/legal.repository.js";

import prisma from "../config/database.js";

export const createLegalRequest = async ( payload ) => {
    const request = await legalRepository.createLegalRequest(payload);

    await prisma.clientRequest.create({
        data: {
            request_type: "legal_request",
            reference_id: request.legal_request_id,
            client_email: request.email,
            status: "pending",
        },
    });
    return request;
};

export const getAllLegalRequests =
  async () => {
    return await legalRepository.getAllLegalRequests();
  };

export const getLegalRequestById =
  async (id) => {
    return await legalRepository.getLegalRequestById(
      id
    );
  };

export const updateLegalRequestStatus =
  async (id, status) => {
    return await legalRepository.updateLegalRequestStatus(
      id,
      status
    );
  };   
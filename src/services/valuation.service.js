import * as valuationRepository from "../repositories/valuation.repository.js";

import prisma from "../config/database.js";

export const createValuationRequest = async ( payload ) => {
    const application = await valuationRepository.createValuationRequest(payload);

    await prisma.clientRequest.create({
        data: {
            request_type: "valuation_request",
            reference_id: application.valuation_request_id,
            client_email: application.email,
            status: "pending",
        },
    });
    return application;
};

export const getAllValuationRequests =
  async () => {
    return await valuationRepository.getAllValuationRequests();
  };

export const getValuationRequestById =
  async (id) => {
    return await valuationRepository.getValuationRequestById(
      id
    );
  };

export const updateValuationRequestStatus =
  async (id, status) => {
    return await valuationRepository.updateValuationRequestStatus(
      id,
      status
    );
  };   
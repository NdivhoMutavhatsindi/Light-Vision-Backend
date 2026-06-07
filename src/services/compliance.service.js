import * as complianceRepository from "../repositories/compliance.repository.js";

import prisma from "../config/database.js";

export const createComplianceRequest = async ( payload ) => {
    const application = await complianceRepository.createComplianceRequest(payload);

    await prisma.clientRequest.create({
        data: {
            request_type: "compliance_request",
            reference_id: application.compliance_request_id,
            client_email: application.email,
            status: "pending",
        },
    });
    return application;
};

export const getAllComplianceRequests =
  async () => {
    return await complianceRepository.getAllComplianceRequests();
  };

export const getComplianceRequestById =
  async (id) => {
    return await complianceRepository.getComplianceRequestById(
      id
    );
  };

export const updateComplianceRequestStatus =
  async (id, status) => {
    return await complianceRepository.updateComplianceRequestStatus(
      id,
      status
    );
  };   
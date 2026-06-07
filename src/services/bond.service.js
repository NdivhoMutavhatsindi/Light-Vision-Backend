import * as bondRepository from "../repositories/bond.repository.js";

import prisma from "../config/database.js";

export const createBondApplication = async (
  payload
) => {

  const gross_income =
    Number(payload.base_salary) +
    Number(payload.allowances || 0) +
    Number(payload.other_income || 0);

  const disposable_income =
    gross_income -
    Number(payload.monthly_expenses);

  const debt_to_income_ratio =
  gross_income > 0
    ? Number(
        (
          (Number(payload.monthly_expenses) /
            gross_income) *
          100
        ).toFixed(2)
      )
    : 0;

  const available_for_bond =
    disposable_income * 0.3;

  const application =
    await bondRepository.createBondApplication({
      ...payload,

      gross_income,

      disposable_income,

      debt_to_income_ratio,

      available_for_bond,
    });

  await prisma.clientRequest.create({
    data: {
      request_type: "bond_application",

      reference_id:
        application.bond_application_id,

      client_email: application.email,

      status: "pending",
    },
  });

  return application;
};

export const getAllBondApplications =
  async () => {
    return await bondRepository.getAllBondApplications();
  };

export const getBondApplicationById =
  async (id) => {
    return await bondRepository.getBondApplicationById(
      id
    );
  };

export const updateBondApplicationStatus =
  async (id, status) => {
    return await bondRepository.updateBondApplicationStatus(
      id,
      status
    );
  };
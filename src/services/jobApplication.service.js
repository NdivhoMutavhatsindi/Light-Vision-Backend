import * as jobApplicationRepository
  from "../repositories/jobApplication.repository.js";

import { uploadPDFToCloudinary }
  from "../helper/uploadPDFToCloudinary.js";

export const createJobApplication =
  async (payload, file) => {

    if (!file) {
      throw new Error("CV file is required");
    }

    const result =
      await uploadPDFToCloudinary(
        file.buffer,
        file.originalname
      );

    const application =
      await jobApplicationRepository.createJobApplication({
        ...payload,

        cv_url: result.secure_url,
      });

    return application;
  };

export const getAllJobApplications =
  async () => {
    return await jobApplicationRepository.getAllJobApplications();
  };

export const getJobApplicationById =
  async (id) => {
    return await jobApplicationRepository.getJobApplicationById(id);
  };

export const updateJobApplicationStatus =
  async (id, status) => {
    return await jobApplicationRepository.updateJobApplicationStatus(
      id,
      status
    );
  };
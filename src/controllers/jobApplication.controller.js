import * as jobApplicationService
  from "../services/jobApplication.service.js";

import { successResponse }
  from "../util/response.js";

export const createJobApplication =
  async (req, res, next) => {

    try {

      const application =
        await jobApplicationService.createJobApplication(
          req.body,
          req.file
        );

      return successResponse(
        res,
        "Job application submitted successfully",
        application,
        201
      );

    } catch (error) {

      next(error);
    }
  };

export const getAllJobApplications =
  async (req, res, next) => {

    try {

      const applications =
        await jobApplicationService.getAllJobApplications();

      return successResponse(
        res,
        "Job applications fetched successfully",
        applications
      );

    } catch (error) {

      next(error);
    }
  };

export const getJobApplicationById =
  async (req, res, next) => {

    try {

      const application =
        await jobApplicationService.getJobApplicationById(
          req.params.id
        );

      return successResponse(
        res,
        "Job application fetched successfully",
        application
      );

    } catch (error) {

      next(error);
    }
  };

export const updateJobApplicationStatus =
  async (req, res, next) => {

    try {

      const application =
        await jobApplicationService.updateJobApplicationStatus(
          req.params.id,
          req.body.status
        );

      return successResponse(
        res,
        "Job application updated successfully",
        application
      );

    } catch (error) {

      next(error);
    }
  };
import Joi from "joi";

export const createJobApplicationSchema =
  Joi.object({

    career_id:
      Joi.string()
        .length(36)
        .required(),

    first_name:
      Joi.string()
        .max(100)
        .required(),

    last_name:
      Joi.string()
        .max(100)
        .required(),

    email:
      Joi.string()
        .email()
        .required(),

    phone:
      Joi.string()
        .max(20)
        .required(),

    CV_url:
      Joi.string()
        .uri()
        .required(),

    cover_letter:
      Joi.string()
        .allow("")
        .optional(),

    status:
      Joi.string()
        .valid("PENDING", "REVIEWED", "REJECTED", "ACCEPTED")
        .default("PENDING"),
  });
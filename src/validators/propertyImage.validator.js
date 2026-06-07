import Joi from "joi";

export const updatePropertyImageValidator =
  Joi.object({

    is_primary: Joi.boolean(),

    display_order: Joi.number()
      .integer()
      .min(0),
  });
import joi from "joi";

export const createValuationRequestSchema = joi.object({
    first_name: joi.string().required(),

    last_name: joi.string().required(),

    email: joi.string().email().required(),

    phone: joi.string().required(),

    message: joi.string().allow("", null),

    status: joi.string().default("pending"),
});     
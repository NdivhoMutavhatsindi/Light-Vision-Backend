import joi from "joi";

export const createPrequalificationApplicationSchema = joi.object({
    first_name: joi.string().required(),

    last_name: joi.string().required(),

    id_number: joi.string().required(),

    marital_status: joi.string().allow("", null),

    email: joi.string().email().required(),

    phone: joi.string().required(),

    employment_status: joi.string().allow("", null),

    employer_name: joi.string().allow("", null),

    gross_monthly_income: joi.number().min(0).required(),

    monthly_expenses: joi.number().min(0).required(),

    property_type: joi.string().allow("", null),

    price_range: joi.string().allow("", null),

    deposit_available: joi.boolean().required(),

    status: joi.string().default("pending"),
});
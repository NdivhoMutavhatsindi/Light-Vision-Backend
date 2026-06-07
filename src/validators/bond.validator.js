import joi from "joi";

export const createBondApplicationSchema = joi.object({
    first_name: joi.string().required(),

    last_name: joi.string().required(),

    email: joi.string().email().required(),

    phone: joi.string().required(),

    id_number: joi.string().required(),

    marital_status: joi.string().allow("", null),

    employment_status: joi.string().allow("", null),

    employer_name: joi.string().allow("", null),

    base_salary: joi.number().min(0).required(),

    allowances: joi.number().min(0).required(),

    other_income: joi.number().min(0).default(0),
    
    monthly_expenses: joi.number().min(0).required(),
});
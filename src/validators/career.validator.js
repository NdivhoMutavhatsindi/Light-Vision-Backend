import joi from "joi";

export const createCareerRequestSchema = joi.object({
    title: joi.string().required(),

    location: joi.string().required(),

    employment_type: joi.string().valid(
        "fulltime",
        "parttime",
        "temporary",
        "contract",
        "internship"
    )
    .default("fulltime").allow("",null),

    description: joi.string().required(),

    is_active: joi.boolean().default(true),
});
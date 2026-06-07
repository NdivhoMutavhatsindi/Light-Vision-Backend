import joi from "joi";

export const createPropertySchema = joi.object({
    title: joi.string().max(255).required(),

    description: joi.string().allow("", null),

    location: joi.string().max(255).required(),

    bedrooms: joi.number().integer().min(0),

    bathrooms: joi.number().integer().min(0),

    price: joi.number().positive().required(),

    property_type: joi.string().required(),

    status: joi.string().valid("available", "sold", "pending", "rented", "inactive").default("available")
});
import joi from "joi";

export const createOfferRequestSchema = joi.object({
    property_id: joi.string().uuid().required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().pattern(/^[0-9+\-\s\(\)]+$/).required(),
    offer_document_url: joi.string().uri().required(),
    offer_amount: joi.number().precision(2).positive().required(),
    status: joi.string().valid('pending', 'accepted', 'rejected').default('pending'),
});

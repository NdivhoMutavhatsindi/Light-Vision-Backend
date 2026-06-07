import joi from "joi";

export const createAgentRequestSchema = joi.object({
    first_name: joi.string().required(),

    last_name: joi.string().required(),

    email: joi.string().email().optional(),

    phone: joi.string().optional(),

    facebook_url: joi.string().uri().optional(),

    instagram_url: joi.string().uri().optional(),

    whatsapp_url: joi.string().uri().optional(),

    twitter_url: joi.string().uri().optional(),

    linkedin_url: joi.string().uri().optional(),

    profile_image: joi.string().uri().optional(),
    
    bio: joi.string().max(255).optional()
});
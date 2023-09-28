import Joi from 'joi';

export const PostCompany = Joi.object({
    comp_name : Joi.string().required().max(64),
    comp_photo_link: Joi.string().required().max(255)
})

export const PostComplex = Joi.object({
    compx_name: Joi.string().required(),
    compx_photo: Joi.string().required().max(255),
    comp_name : Joi.string().required(),
    comp_id: Joi.string()
})

export const PostRoom = Joi.object({
    room_number: Joi.number().required(),
    room_size: Joi.number().required(),
    room_cost : Joi.string().required(),
    room_photo : Joi.string(),
    compx_name: Joi.string().required(),
    compx_id : Joi.string()
})


export const PostBank = Joi.object({
    bank_name: Joi.string().required(),
    bank_loan: Joi.string().required(),
    bank_loan_year : Joi.number().required(),
    bank_loan_percent : Joi.number().required(),
    bank_photo: Joi.string()
})

export const PostLogin = Joi.object({
    username: Joi.string().required(),
    password: Joi.number().required()
})
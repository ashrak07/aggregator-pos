const Joi = require("joi");

const userCreateSchema = Joi.object({
    email: Joi.string().email().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
    password : Joi.string()
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/).min(8)
    .required(),
    active: Joi.boolean().default(true),
    group: Joi.string().default('CUSTOMER_GROUP'),
});

const userLoginSchema = Joi.object({
    login : Joi.string().required(),
    password : Joi.string()
    //.regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/).min(8)
    .required(),
});

const userPasswordSchema = Joi.object({
    newPassword : Joi.string()
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/).min(8)
    .required(),
    currentPassword : Joi.string()
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/).min(8)
    .required()
});

const userUpdateSchema = Joi.object({
    firstname : Joi.string().allow(null).required(),
    lastname : Joi.string().allow(null).required(),
    username : Joi.string().allow(null).required(),
    email : Joi.string().email().allow(null).required(),
    write_uid : Joi.number().allow(null).required(),
    country_id : Joi.number().allow(null).required(),
    phone : Joi.string().allow(null).required(),
    mobile : Joi.string().allow(null).required(),
    city : Joi.string().allow(null).required(),
    birth_date : Joi.date().allow(null).required()
});

module.exports = { userCreateSchema, userLoginSchema, userUpdateSchema, userPasswordSchema };
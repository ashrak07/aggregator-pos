const Joi = require("joi");


const eventIdSchema = Joi.object({
    field_name : Joi.string().required(),
    field_value : Joi.number().required(),
   
});


module.exports = { eventIdSchema };
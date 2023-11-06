const Joi = require("joi");


const eventIdSchema = Joi.object({
    fieldName : Joi.required(),
    fieldValue : Joi.required(),
   
});


module.exports = { eventIdSchema };
const Joi = require("joi");

const userIdSchema = Joi.object({
    user_id : Joi.number().required(),
   
});

module.exports = { userIdSchema };
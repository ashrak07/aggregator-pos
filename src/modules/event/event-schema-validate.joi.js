const Joi = require("joi");


const shopIdSchema = Joi.object({
    shopId : Joi.number().required(),
});


module.exports = { shopIdSchema };

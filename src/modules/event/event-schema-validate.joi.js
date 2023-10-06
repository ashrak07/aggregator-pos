const Joi = require("joi");


const shopIdSchema = Joi.object({
    shop_id : Joi.number().required(),
   
});


module.exports = { shopIdSchema };
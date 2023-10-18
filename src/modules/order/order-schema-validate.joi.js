const Joi = require("joi");

const orderCreateUidSchema = Joi.object({
    create_uid : Joi.number().required(),
   
});

const deleteOrderSchema = Joi.object({
    order_id : Joi.number().required(),
   

});

module.exports = { orderCreateUidSchema,deleteOrderSchema };
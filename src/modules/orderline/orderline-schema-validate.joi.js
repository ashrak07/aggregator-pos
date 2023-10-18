const Joi = require("joi");

const orderlineSchema = Joi.object({
    order_id : Joi.number().required(),
   
});

const deleteOrderlineSchema = Joi.object({
    orderline_id : Joi.number().required(),
   

});

module.exports = { orderlineSchema,deleteOrderlineSchema };
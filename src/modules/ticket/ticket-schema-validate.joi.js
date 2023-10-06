const Joi = require("joi");


const eventIdSchema = Joi.object({
    event_id : Joi.number().required(),
   
});


module.exports = { eventIdSchema };
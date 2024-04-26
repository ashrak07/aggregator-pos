const Joi = require("joi");


const eventIdSchema = Joi.object({
    event_id : Joi.required(),
   
});


module.exports = { eventIdSchema };

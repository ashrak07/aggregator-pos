const { eventIdSchema } = require('../modules/ticket/ticket-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

module.exports.listTicketTypesValidate = async (req, res, next) => {
    try {
        const id = { 
            field_name : req.body.field_name,
            field_value : req.body.field_value,
        };

        await eventIdSchema.validateAsync(id);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

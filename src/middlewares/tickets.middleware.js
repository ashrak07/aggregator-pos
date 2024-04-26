const { eventIdSchema } = require('../modules/ticket/ticket-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

module.exports.listTicketTypesValidate = async (req, res, next) => {
    try {

        await eventIdSchema.validateAsync(req.query);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

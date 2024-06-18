const { shopIdSchema } = require('../modules/event/event-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

module.exports.listEventByShopIdValidate = async (req, res, next) => {
    try {
        const queryParams = { 
            shopId: req.query.shopId
        };

        await shopIdSchema.validateAsync(queryParams);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

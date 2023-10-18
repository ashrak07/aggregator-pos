const { shopIdSchema } = require('../modules/event/event-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

module.exports.listEventByShopIdValidate = async (req, res, next) => {
    try {
        const id = { 
            shop_id: req.body.shop_id
        };

        await shopIdSchema.validateAsync(id);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

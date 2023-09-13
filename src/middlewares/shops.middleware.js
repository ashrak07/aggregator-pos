const { userIdSchema } = require('../modules/shop/shop-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

module.exports.listShopByUserIdValidate = async (req, res, next) => {
    try {
        const id = { 
            user_id: req.params.user_id
        };

        await userIdSchema.validateAsync(id);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};


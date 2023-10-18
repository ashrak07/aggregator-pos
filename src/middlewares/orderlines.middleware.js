const { orderlineSchema,deleteOrderlineSchema } = require('../modules/orderline/orderline-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

module.exports.listOrderlineValidate = async (req, res, next) => {
    try {
        const id = { 
            order_id: req.body.order_id
        };

        await orderlineSchema.validateAsync(id);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

module.exports.deleteOrderlineValidate = async (req, res, next) => {
    try {
        const id = { 
            orderline_id: req.body.orderline_id
        };

        await deleteOrderlineSchema.validateAsync(id);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
}
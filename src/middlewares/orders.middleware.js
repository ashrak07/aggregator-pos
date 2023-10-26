const { orderCreateUidSchema,deleteOrderSchema,checkDiscountSchema } = require('../modules/order/order-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

module.exports.listOrdersValidate = async (req, res, next) => {
    try {
        const id = { 
            create_uid: req.body.create_uid
        };

        await orderCreateUidSchema.validateAsync(id);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

module.exports.deleteOrderValidate = async (req, res, next) => {
    try {
        const id = { 
            order_id: req.body.order_id
        };

        await deleteOrderSchema.validateAsync(id);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

module.exports.checkDiscountValidate = async (req, res, next) => {
    try{
        const check = {
            name: req.body.name,
            idorder: req.body.idorder,
        };

        await checkDiscountSchema.validateAsync(check);
        
        next();
    }
    catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
    
};
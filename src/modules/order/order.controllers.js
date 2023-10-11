const orderService = require('./order.service');
const statusCode = require("../../constants/status-code.constants");

exports.createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        const response = {
            "message": "session ok",
            "data": order
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller createOrder : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
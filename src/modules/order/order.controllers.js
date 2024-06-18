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
};

exports.getOrders = async (req, res) => {
    try {
        const id = req.body.id;
        const page = req.params.page;
        const orders = await orderService.getOrders(id,page);
        const response = {
        "message": "session ok",
            "data": orders
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getOrders : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};

exports.getOrdersByCreateUid = async (req, res) => {
    try {
        const id = req.body.create_uid;
        const page = req.params.page;
        const nb = req.params.nb;
        const orders = await orderService.getOrdersByCreateUid(id,page,nb);
        const response = {
            "message": "session ok",
            "data": orders
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getOrdersByCreateUid : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};

exports.findOrder = async (req, res) => {
    try {
        console.log("findOrder body : ", req.body);
        const id = req.body.id;
        const buyer_name = req.body.buyer_name;
        const page = req.params.page;

        const field_name = ['id', 'buyer_name']
        const field_value = [id, buyer_name]
        const orders = await orderService.findOrder(page, field_name, field_value);
        const response = {
            "message": "session ok",
            "data": orders
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getOrdersByCreateUid : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};


exports.updateOrder = async (req, res) => {
    try {
        console.log("req.body : ", req.body);
        const order = await orderService.updateOrder(req.body);
        const response = {
            "message": "session ok",
            "data": order
        }
        return res.status(statusCode["OK"]).json(response);
        
    } catch (error) {
        console.log("Error controller updateOrder : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const id_deleted = await orderService.deleteOrder(req.body.order_id);
        const response = {
            "message": "session ok",
            "data": id_deleted
        }
        return res.status(statusCode["OK"]).json(response);
        
    } catch (error) {
        console.log("Error controller deleteOrder : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};

exports.checkDiscount = async (req, res) => {
    try {
        const check = await orderService.checkDiscount(req.body);
        const response = {
            "message": "session ok",
            "data": check
        }
        return res.status(statusCode["OK"]).json(response);
        
    } catch (error) {
        console.log("Error controller checkDiscount : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}

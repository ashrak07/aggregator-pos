const orderlineService = require('./orderline.services');
const statusCode = require("../../constants/status-code.constants");

exports.createOrderline = async (req, res) => {
    try {

        const orderlines = await orderlineService.getOrderlinesByOrderId(req.body.order_id);
        console.log("orderlines: ", orderlines)

        for (let i = 0; i < orderlines.length; i++) {
            const element = orderlines[i];
            console.log(element.ticket_type_id,"!!!!!!!!!!!!!!!",req.body.ticket_type_id );
            if (element.ticket_type_id == req.body.ticket_type_id) {
                console.log("executing addition: ", element.qty,"+", req.body.qty)
                element.qty += req.body.qty;
                console.log("new quantity==>", element.qty)

                
                const date = new Date().toISOString().split('.')[0].replace('T', ' ');
                element.write_date = date;
                

                const orderline = await orderlineService.updateOrderline(element);
                console.log("orderline updated",orderline)
                const response = {
                    "message": "session ok",
                    "data": orderline
                }
                return res.status(statusCode["OK"]).json(response);
            }
        }

        const order = await orderlineService.createOrderline(req.body);
        const response = {
            "message": "session ok",
            "data": order
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller createOrderline : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}

exports.getOrderlinesByOrderId = async (req, res) => {
    try {
        const id = req.body.order_id;
        const orderlines = await orderlineService.getOrderlinesByOrderId(id);
        const response = {
            "message": "session ok",
            "data": orderlines
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getOrdersline : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}

exports.updateOrderline = async (req, res) => {
    try {
        const order = await orderlineService.updateOrderline(req.body);
        const response = {
            "message": "session ok",
            "data": order
        }
        return res.status(statusCode["OK"]).json(response);
        
    } catch (error) {
        console.log("Error controller updateOrderline : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}

exports.deleteOrderline = async (req, res) => {
    try {
        const id_deleted = await orderlineService.deleteOrderline(req.body.orderline_id);
        const response = {
            "message": "session ok",
            "data": id_deleted
        }
        return res.status(statusCode["OK"]).json(response);
        
    } catch (error) {
        console.log("Error controller deleteOrder : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
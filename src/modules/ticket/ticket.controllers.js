const ticketService = require('./ticket.services');
const statusCode = require("../../constants/status-code.constants");

exports.getTicketTypes = async (req, res) => {
    try {
        const name = req.body.fieldName;
        const value = req.body.fieldValue;
        const page = req.params.page;

        const ListTickets = await ticketService.getTicketTypes(name,value,page);

        const response = {
            "message": "session ok",
            "data": ListTickets
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getTicketTypes : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};

exports.createOrderTicket = async (req, res) => {
    try {
        const order_id = req.body.order_id;
        const order = await ticketService.createOrderTicket(order_id);
        const response = {
            "message": "session ok",
            "data": order
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller createOrderTicket : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};


exports.getTickets = async (req, res) => {
    try {
        
        const ListTickets = await ticketService.getTickets(req.body);

        const response = {
            "message": "session ok",
            "data": ListTickets
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getTickets : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};
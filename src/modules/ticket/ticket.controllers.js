const ticketService = require('./ticket.services');
const statusCode = require("../../constants/status-code.constants");

exports.getTicketTypes = async (req, res) => {
    try {
        console.log(req.query)

        const ListTickets = await ticketService.getTicketTypes(req.query.event_id, req.query.page);

        console.log(ListTickets)
        
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

exports.generateTicketPdf = async (req, res) => {
    try {
        const ticket_id = req.body;
        const ticket = await ticketService.generateTicketPdf(ticket_id);
        const response = {
            "message": "session ok",
            "data": ticket
        }
        return res.status(statusCode["OK"]).json(response);
        
    } catch (error) {
        
    }
}

exports.getTicketsSold = async (req, res) => {
    try {
        const eventId = req.params.eventId
        const response = await ticketService.getTicketsSold(eventId)
        console.log(response)
        return res.status(statusCode['OK']).json(response)
    } catch (err) {
        res.status(statusCode['INTERNAL_SERVER_ERROR']).json({
            message: 'ERROR SERVER',
            error: err.message
        })
    }
}

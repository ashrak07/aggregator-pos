const ticketService = require('./ticket.services');
const statusCode = require("../../constants/status-code.constants");

exports.getTicketTypes = async (req, res) => {
    try {
        const id = req.body.event_id;
        const page = req.params.page;

        const ListTickets = await ticketService.getTicketTypes(id,page);

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
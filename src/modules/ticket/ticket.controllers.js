const ticketService = require('./ticket.services');
const statusCode = require("../../constants/status-code.constants");

exports.getTicketTypes = async (req, res) => {
    try {
        const name = req.body.field_name;
        const value = req.body.field_value;
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
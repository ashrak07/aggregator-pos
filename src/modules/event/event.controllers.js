const eventService = require('./event.services');
const statusCode = require("../../constants/status-code.constants");

exports.getEventByShopId = async (req, res) => {
    try {
        const shopId = req.query.shopId;
        const pageSize = req.query.pageSize || 10;
        const page = req.query.page || 1 ;

        const events = await eventService.getEventByShopId(shopId, pageSize, page);

        const response = {
            "message": "session ok",
            "data": events
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getEventByShopId : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await eventService.getEvents(req.body);
        const response = {
            "message": "session ok",
            "data": events
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getEvents : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};

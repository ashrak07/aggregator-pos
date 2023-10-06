const eventService = require('./event.services');
const statusCode = require("../../constants/status-code.constants");

exports.getEventByShopId = async (req, res) => {
    try {
        const shop_id = req.params.shop_id;
        const nb = req.params.nb;
        const page = req.params.page;

        const ListEvent = await eventService.getEventByShopId(shop_id,nb,page);

        const response = {
            "message": "session ok",
            "data": ListEvent
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getEventByShopId : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
};
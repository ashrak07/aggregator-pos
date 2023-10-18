const shopService = require('./shop.services');
const statusCode = require("../../constants/status-code.constants");

exports.getShopByUserId = async (req, res) => {
    try {
        const user_id = req.body.user_id;
        console.log("user_id : ", user_id);
        const nb = req.params.nb;
        const page = req.params.page;

        const ListShop = await shopService.getShopByUserId(user_id,nb,page);
        const response = {
            "message": "session ok",
            "data": ListShop
        }
        return res.status(statusCode["OK"]).json(response);
    } catch (error) {
        console.log("Error controller getShopByUserId : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
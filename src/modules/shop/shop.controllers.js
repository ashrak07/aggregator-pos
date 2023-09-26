const shopService = require('./shop.services');
const statusCode = require("../../constants/status-code.constants");

exports.getShopByUserId = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const nb = req.params.nb;
        const page = req.params.page;

        const ListShop = await shopService.getShopByUserId(user_id,nb,page);
        return res.status(statusCode["OK"]).json(ListShop);
    } catch (error) {
        console.log("Error controller getShopByUserId : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
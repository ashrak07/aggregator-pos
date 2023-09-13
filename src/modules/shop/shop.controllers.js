const shopService = require('./shop.services');
const statusCode = require("../../constants/status-code.constants");
const jwt = require("jsonwebtoken");

exports.getShopByUserId = async (req, res) => {
    try {
        const ListShop = await shopService.getShopByUserId(req.params.user_id);
        return res.status(statusCode["OK"]).json(ListShop);
    } catch (error) {
        console.log("Error controller getShopByUserId : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
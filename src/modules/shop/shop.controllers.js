const shopService = require('./shop.services');
const statusCode = require("../../constants/status-code.constants");
const jwt = require("jsonwebtoken");

exports.getShopByUserId = async (req, res) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const date_now = new Date();
        const date_exp = new Date((decoded.iat * 1000) + (process.env.JWT_EXPIRATION * 1000));
        
        if (date_now > date_exp) {
            return res.status(statusCode["UNAUTHORIZED"]).json({message : "ERROR CLIENT", errorMessage : "Session expired"});
        }

        const ListShop = await shopService.getShopByUserId(req.params.user_id);
        return res.status(statusCode["OK"]).json(ListShop);
    } catch (error) {
        console.log("Error controller getShopByUserId : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
const userService = require('./users.services');
const statusCode = require("../../constants/status-code.constants");


exports.login = async (req, res) => {
    try {
        const authToken =  await userService.login(req.body);

        return res.status(statusCode["OK"]).json({ 
            access_token: authToken,
            expires_in: 3600,
         });
    } catch (error) {
        console.log("Error controller login user : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
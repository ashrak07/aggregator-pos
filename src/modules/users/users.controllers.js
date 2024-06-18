const userService = require('./users.services');
const statusCode = require("../../constants/status-code.constants");


exports.login = async (req, res) => {
    try {
        const { authToken, id, name } =  await userService.login(req.body);

        return res.status(statusCode["OK"]).json({ 
            id, name,
            access_token: authToken,
            expires_in: process.env.JWT_EXPIRATION
            ,
         });
    } catch (error) {
        console.log("Error controller login user : ", error);
        return res.status(statusCode["UNAUTHORIZED"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}

exports.onChecked = (_req, res) => {
    return res.status(statusCode.OK).json({ message: 'SESSION_OK' })
}

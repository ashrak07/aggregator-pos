const userService = require('./users.services');
const statusCode = require("../../constants/status-code.constants");


exports.login = async (req, res) => {
    try {
        const authToken =  await userService.login(req.body);
        //console.log("email and password : ", req.body.email, req.body.password);

        return res.status(statusCode["OK"]).json({ 
            access_token: authToken,
            //TODO: define expiration time, here is just an example
            expires_in: 3600//process.env.JWT_EXPIRATION,
         });
    } catch (error) {
        console.log("Error controller login user : ", error);
        return res.status(statusCode["INTERNAL_SERVER_ERROR"]).json({message : "ERROR SERVER", errorMessage : error.message });
    }
}
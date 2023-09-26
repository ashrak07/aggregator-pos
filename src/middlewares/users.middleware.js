const { userLoginSchema } = require('../modules/users/users-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");
const jwt = require("jsonwebtoken");

module.exports.usersLoginDataValidate = async (req, res, next) => {
    try {
        const user = { 
            login: req.body.email,
            password: req.body.password,
        };

        await userLoginSchema.validateAsync(user);

        next();
    } catch (error) {
        return res.status(statusCode["UNPROCESSABLE_ENTITY"]).send(error.details[0].message);
    }
};

module.exports.checkSessionValidate = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
    } catch (error) {
        return res.status(statusCode["UNAUTHORIZED"]).json({message : "ERROR CLIENT", errorMessage : "Session expired"});
    }

};

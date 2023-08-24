const { userLoginSchema } = require('../modules/users/users-schema-validate.joi');
const statusCode = require("../constants/status-code.constants");

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


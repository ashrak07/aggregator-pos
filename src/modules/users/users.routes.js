const express = require("express");
const router = express.Router();
const usersControllers = require("./users.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");

router.post(
    "/login",
    usersMiddleware.usersLoginDataValidate,
    usersControllers.login
  );

router.post(
    '/check_session',
    usersMiddleware.checkSessionValidate,
    usersControllers.onChecked
)

module.exports = router;

const express = require("express");
const router = express.Router();
const orderControllers = require("./order.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");

router.post(
    "/create",
    usersMiddleware.checkSessionValidate,
    orderControllers.createOrder
  );

module.exports = router;
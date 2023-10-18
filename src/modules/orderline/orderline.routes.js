const express = require("express");
const router = express.Router();
const orderlineControllers = require("./orderline.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");
const orderlineMiddleware = require("../../middlewares/orderlines.middleware");

router.put(
    "/create",
    usersMiddleware.checkSessionValidate,
    orderlineControllers.createOrderline
  );

router.post(
    "",
    orderlineMiddleware.listOrderlineValidate,
    usersMiddleware.checkSessionValidate,
    orderlineControllers.getOrderlinesByOrderId
  );

router.post(
    "/update",
    usersMiddleware.checkSessionValidate,
    orderlineControllers.updateOrderline
)

router.delete(
    "/delete",
    orderlineMiddleware.deleteOrderlineValidate,
    usersMiddleware.checkSessionValidate,
    orderlineControllers.deleteOrderline
)

module.exports = router;
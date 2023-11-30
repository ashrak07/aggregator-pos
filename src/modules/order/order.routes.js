const express = require("express");
const router = express.Router();
const orderControllers = require("./order.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");
const orderMiddleware = require("../../middlewares/orders.middleware");

router.put(
    "/create",
    usersMiddleware.checkSessionValidate,
    orderControllers.createOrder
  );

router.post(
    "/createUid/:page?/:nb?",
    orderMiddleware.listOrdersValidate,
    usersMiddleware.checkSessionValidate,
    orderControllers.getOrdersByCreateUid
  );

router.post(
  "/find/:page?",
  usersMiddleware.checkSessionValidate,
  orderControllers.findOrder
);

router.post(
    "/update",
    usersMiddleware.checkSessionValidate,
    orderControllers.updateOrder
)

router.delete(
    "/delete",
    orderMiddleware.deleteOrderValidate,
    usersMiddleware.checkSessionValidate,
    orderControllers.deleteOrder
)

router.post(
    "/checkDiscount",
    orderMiddleware.checkDiscountValidate,
    usersMiddleware.checkSessionValidate,
    orderControllers.checkDiscount
)

module.exports = router;
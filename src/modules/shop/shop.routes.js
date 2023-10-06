const express = require("express");
const router = express.Router();
const shopControllers = require("./shop.controllers");
const eventControllers = require("../event/event.controllers");
const shopMiddleware = require("../../middlewares/shops.middleware");
const usersMiddleware = require("../../middlewares/users.middleware");
const eventMiddleware = require("../../middlewares/events.middleware");

router.get(
    "/users/:user_id/:page?/:nb?",
    shopMiddleware.listShopByUserIdValidate,
    usersMiddleware.checkSessionValidate,
    shopControllers.getShopByUserId
  );

router.get(
    "/events/:shop_id/:page?/:nb?",
    eventMiddleware.listEventByShopIdValidate,
    usersMiddleware.checkSessionValidate,
    eventControllers.getEventByShopId
);

module.exports = router;
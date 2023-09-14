const express = require("express");
const router = express.Router();
const shopControllers = require("./shop.controllers");
const shopMiddleware = require("../../middlewares/shops.middleware");
const usersMiddleware = require("../../middlewares/users.middleware");

router.get(
    "/users/:user_id",
    shopMiddleware.listShopByUserIdValidate,
    usersMiddleware.checkSessionValidate,
    shopControllers.getShopByUserId
  );

module.exports = router;
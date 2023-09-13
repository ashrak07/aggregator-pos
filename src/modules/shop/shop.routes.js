const express = require("express");
const router = express.Router();
const shopControllers = require("./shop.controllers");
const shopMiddleware = require("../../middlewares/shops.middleware");

router.get(
    "/users/:user_id",
    shopMiddleware.listShopByUserIdValidate,
    shopControllers.getShopByUserId
  );

module.exports = router;
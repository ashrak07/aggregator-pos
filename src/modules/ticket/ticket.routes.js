const express = require("express");
const router = express.Router();
const ticketControllers = require("./ticket.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");

router.get(
    "/",
    usersMiddleware.checkSessionValidate,
    
);

module.exports = router;
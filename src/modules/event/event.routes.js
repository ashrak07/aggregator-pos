const express = require("express");
const router = express.Router();
const ticketControllers = require("../ticket/ticket.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");
const ticketsMiddleware = require("../../middlewares/tickets.middleware");

router.post(
    "/tickets/:page?",
    ticketsMiddleware.listTicketTypesValidate,
    usersMiddleware.checkSessionValidate,
    ticketControllers.getTicketTypes
);

module.exports = router;
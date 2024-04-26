const express = require("express");
const router = express.Router();
const ticketControllers = require("../ticket/ticket.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");
const ticketsMiddleware = require("../../middlewares/tickets.middleware");
const eventController = require("./event.controllers");

router.get(
    "/tickets",
    ticketsMiddleware.listTicketTypesValidate,
    usersMiddleware.checkSessionValidate,
    ticketControllers.getTicketTypes
);

router.post(
    "/",
    eventController.getEvents
);

module.exports = router;

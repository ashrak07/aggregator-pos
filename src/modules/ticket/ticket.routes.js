const express = require("express");
const router = express.Router();
const ticketControllers = require("./ticket.controllers");
const usersMiddleware = require("../../middlewares/users.middleware");

router.put(
    "/create",
    usersMiddleware.checkSessionValidate,
    ticketControllers.createOrderTicket,

);
router.post(
    "/order_id",
    usersMiddleware.checkSessionValidate,
    ticketControllers.getTickets,
    
);

router.post(
    "/generatePdf",
    usersMiddleware.checkSessionValidate,
    ticketControllers.generateTicketPdf,
);

module.exports = router;
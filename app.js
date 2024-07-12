require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./src/modules/users/users.routes');
var shopRouter = require('./src/modules/shop/shop.routes');
var eventRouter = require('./src/modules/event/event.routes');
var orderRouter = require('./src/modules/order/order.routes');
var orderlineRouter = require('./src/modules/orderline/orderline.routes');
var ticketRouter = require('./src/modules/ticket/ticket.routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopRouter);
app.use('/events', eventRouter);
app.use('/orders', orderRouter);
app.use('/orderlines', orderlineRouter);
app.use('/tickets', ticketRouter);

module.exports = app;

var express = require('express');
var routes = express.Router();

var usersRoutes = require('./users');
var indexRoutes = require('./index');

routes.use('/users', usersRoutes);
routes.use('/', indexRoutes);

module.exports = routes;

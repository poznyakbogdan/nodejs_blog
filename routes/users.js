var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
var userController = require('../controllers/usersController');

router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', userController.create);

module.exports = router;

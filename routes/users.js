var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.post('/', function(req, res) {
  var user = new User(req.body);
  user.save(function (result) {
    res.json(user);
  });
});

module.exports = router;

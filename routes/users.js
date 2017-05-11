var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
var userController = require('../controllers/usersController');


router.get('/:id', userController.getUser);
router.post('/', userController.create);

// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });
//

module.exports = router;

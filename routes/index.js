var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('/public/index.html', { title: 'Express' });
});

module.exports = router;

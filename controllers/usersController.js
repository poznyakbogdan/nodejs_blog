var User = require('../models/userModel');

function getUser(req, res, next) {
  User.find({_id: req.params.id}, function(err, user){
    if (err) throw err;
    res.json(user);
  })
}

function newUser() {
  return new User({});
}

function create(req, res, next) {
  User.isUserExist(req.body.email, function (err, result) {
    if (err) throw err;
    if (result) {
      res.json(result);
    } else {
      var user = new User(req.body);
      user.save(function (err) {
        if (err) res.send(404);
        res.send(user);
      });
    }
  });
}

function deleteUser() {

}

function update(req, res) {

}

module.exports = {
  getUser: getUser,
  newUser: newUser,
  create: create,
  deleteUser: deleteUser
};
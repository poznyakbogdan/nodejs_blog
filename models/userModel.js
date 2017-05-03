var mongoose = require('../libs/mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;
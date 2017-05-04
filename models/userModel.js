var mongoose = require('../libs/mongoose');
var crypto = require('crypto');

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  salt: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  }
});

userSchema.methods.encryptPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

userSchema.virtual('password')
  .set(function (password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () { return this._plainPassword; });

userSchema.methods.checkPassword = function (password) {
  return this.encryptPassword(password) == this.hashedPassword;
};

userSchema.static('isUserExist', function (email, callback) {
  return this.findOne({email: email}, callback);
});

var User = mongoose.model('User', userSchema);

module.exports = User;
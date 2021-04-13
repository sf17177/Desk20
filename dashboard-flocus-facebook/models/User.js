const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  uid: String,
  name: String,
  pic: String,
  friends: [String]
});

module.exports = mongoose.model('User', userSchema);

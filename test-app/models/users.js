var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {type: String, required: true}
});

mongoose.model('User', userSchema);

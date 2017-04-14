var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.Promise = global.Promise;

var User = mongoose.model('User');

// drop any existing users
User.remove({}, function(err) {});

// create a few test users
var users = [
  ['Carol', 'Danvers', 'cdanvers'],
  ['Susan', 'Storm', 'sstorm'],
  ['Natasha', 'Romanov', 'nromanov'],
  ['Jean', 'Grey', 'jgrey']
];

users.forEach(function(d) {
    var user = new User();
    user.firstName = d[0];
    user.lastName = d[1];
    user.username = d[2];
    user.save();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var username = req.query.query;
  console.log("query: " + username);

  User.find({"username": username}, function(err, users) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    console.log('find completed: ' + users);
    res.render('mongodb', {users: users});
  });
});

module.exports = router;

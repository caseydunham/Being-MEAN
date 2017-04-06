var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.Promise = global.Promise;

var User = mongoose.model('User');

// drop any existing users
User.remove({}, function(err) {});

// create a few test users
[['test1'], ['test2'], ['test3'], ['test4']].forEach(function(d) {
    var user = new User();
    user.username = d[0];
    user.save();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var username = req.query.query;
  console.log("query: " + username);
  User.find({"username": username}, function(err, users) {
    if (err) {
      console.log(err);
    }
    console.log('find completed: ' + users);
    res.render('mongodb', {users: users});
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var query = req.query.query;
  console.log("value of query: " + query);
  res.render('xss', {query: query});
});

module.exports = router;

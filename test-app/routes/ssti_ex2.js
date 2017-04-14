var express = require('express');
var router = express.Router();
var fs = require('fs');

const jade = require('jade');

router.get('/', function(req, res, next) {
  var query = req.query.expr;
  console.log(query);
  if (query) {
    var template = 'p Hello ' + query;
    var html = jade.compile(template);
    res.send(html());
  } else {
    res.render('ssti_ex2');
  }
});

module.exports = router;

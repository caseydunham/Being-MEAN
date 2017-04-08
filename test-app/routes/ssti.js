var express = require('express');
var router = express.Router();
var fs = require('fs');

const jade = require('jade');

router.get('/', function(req, res, next) {
  res.render('ssti');
});

module.exports = router;

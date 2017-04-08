var express = require('express');
var router = express.Router();
var fs = require('fs');

const jade = require('jade');

router.get('/', function(req, res, next) {
    res.render('ssti_ex2');
});

router.post('/', function(req, res, next) {
    var query = req.body.expr;
    var template = 'p Hello ' + query;
    var html = jade.compile(template);
    res.send(html());
});

module.exports = router;

var express = require('express');
var router = express.Router();
var fs = require('fs');

const jade = require('jade');

router.get('/', function(req, res, next) {
    res.render('ssti_ex1');
});

router.post('/', function(req, res, next) {
    var query = req.body.tpl;
    fs.readFile('./views/ssti_ex1.jade', function(err, data) {
        var compiled = jade.compile(query);
        var html = compiled()
        res.send(html);
    });
});

module.exports = router;

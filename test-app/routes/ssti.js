var express = require('express');
var router = express.Router();
var fs = require('fs');

const jade = require('jade');

router.get('/', function(req, res, next) {
  res.render('ssti');
});

// router.post('/', function(req, res, next) {
//   var query = req.body.tpl;
//   //- fs.readFile('./views/ssti.jade', function(err, data) {
//   fs.readFile('./views/ssti_ex1.jade', function(err, data) {
//     var compiled = jade.compile(query);
//     var html = compiled()
//     res.send(html);
//   });
// });
//
// router.get('/ssti_ex2', function(req, res, next) {
//   res.render('ssti_ex2');
// });
//
// router.post('/ssti_ex2', function(req, res, next) {
//   var query = req.body.expr;
//   var template = 'p Hello ' + query;
//   var html = jade.compile(template);
//   res.send(html());
// });

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ssjsi');
});

router.post('/', function(req, res, next) {
  var data = req.body.query;
  console.log(data);
  try {
    eval(data);
  } catch (ex) {

  }
  res.render('ssjsi');
});

module.exports = router;

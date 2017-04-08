var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// require before routes
require('./models/db');

var index = require('./routes/index');
var users = require('./routes/users');
var whatIsMean = require('./routes/what-is-mean');
var methodology = require('./routes/methodology');
var setup = require('./routes/setup');
var xss = require('./routes/xss');
var mongodb = require('./routes/mongodb');
var ssjsi = require('./routes/ssjsi');
var ssti = require('./routes/ssti');
var ssti_ex1 = require('./routes/ssti_ex1');
var ssti_ex2 = require('./routes/ssti_ex2');
var session = require('./routes/session');
var jwt = require('./routes/jwt');
var conclusion = require('./routes/conclusion');
var resources = require('./routes/resources');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/what-is-mean', whatIsMean);
app.use('/methodology', methodology);
app.use('/setup', setup);
app.use('/xss', xss);
app.use('/mongodb', mongodb);
app.use('/ssjsi', ssjsi);
app.use('/ssti', ssti);
app.use('/ssti_ex1', ssti_ex1);
app.use('/ssti_ex2', ssti_ex2);
app.use('/session', session);
app.use('/jwt', jwt);
app.use('/conclusion', conclusion);
app.use('/resources', resources);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

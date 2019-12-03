var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/list');
var listtRouter = require('./routes/list');
var listpRouter = require('./routes/index');
var listbRouter = require('./routes/index');
var listdRouter = require('./routes/index');
var dongtaiRouter = require('./routes/index');
var zhuceRouter = require('./routes/index');
var activityRouter = require('./routes/index');
var systemRouter = require('./routes/index');
var userguanRouter = require('./routes/index');
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list', listRouter);
app.use('/listt', listtRouter);
app.use('/listp', listpRouter);
app.use('/listb', listbRouter);
app.use('/listd', listdRouter);
app.use('/zhuce', zhuceRouter);
app.use('/activity', activityRouter);
app.use('/dongtai', dongtaiRouter);
app.use('/system', systemRouter);
app.use('/userguanli', userguanRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

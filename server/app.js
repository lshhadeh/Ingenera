var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const client = require('../Database/index');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../Ingenera-client/dist/Ingenera-client')));
app.use('/api', indexRouter);
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, '../Ingenera-client/dist/Ingenera-client/index.html')));
});
module.exports = app;

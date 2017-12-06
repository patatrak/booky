var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

/*var mgoose = require('mongoose');*/

var index = require('./routes/index');
var books = require('./routes/books');

var debug = require('debug')('booky:main');

var isbn = require('./libisbn');
debug(isbn.isbn());

var app = express();

app.disable('x-powered-by');

/* 
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mgoose.connect(process.env.MLABOOKYURI, options );

var db = mgoose.connection;
db.on('error', () => {
	debug('MongoDB connection error:');
	});
	
db.on('connected', () => {
	debug('MongoDB connected');
	
	});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/books', books);
app.use('/books/lookup', books); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found: ' + req.url);
  err.status = 404;
  debug(err.message);
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

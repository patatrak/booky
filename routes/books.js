var express = require('express');
var router = express.Router();

var debug = require('debug')('booky:books');

/*Look for a book by ISBN : form */
router.get('/', function(req, res, next) {
  res.render('books', {	title: 'Lookging for a book'} );
});

router.post('/lookup', function(req, res, next) {
  debug('\r\n\tisbn is :' + req.body.isbn);
  res.render('books', { title: `Information on book: ${req.body.isbn}`, 
								isbn: req.body.isbn} );
});

module.exports = router;

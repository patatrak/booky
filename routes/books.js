var express = require('express');
var router = express.Router();

var isbn = require('node-isbn');

var debug = require('debug')('booky:books');

/*Look for a book by ISBN : form */
router.get('/', function(req, res, next) {
  res.render('books', {	title: 'Lookging for a book'} );
});

router.post('/lookup', function(req, res, next) {
  debug('ISBN to look for:' + req.body.isbn);
  
	isbn.resolve(req.body.isbn, function (err, book) {
		if (err) {
			debug('Book not found', err);
			res.render('books', {
										title: `Book: {req.body.isbn}`, 
										isbn : req.body.isbn} );
		} else {
			debug(`Found: ${book.title}`);
			res.render('books', {
										title		: `${book.title} by ${book.authors}`, 
										isbn		: req.body.isbn,
										bookTitle: book.title,
										pic		: book.imageLinks.thumbnail} );
		}
	});
  
  
});

module.exports = router;

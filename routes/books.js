var express = require('express');
var router = express.Router();

var isbn = require('node-isbn');

var debug = require('debug')('booky:books');

/*Look for a book by ISBN : form */
router.get('/', function(req, res, next) {
  res.render('books', {	title: 'Lookging for a book'} );
});

router.get('/lookup', function(req, res, next) {
  debug('ISBN to look for:' + req.query.isbn);
  
	isbn.resolve(req.query.isbn, function (err, book) {
		if (err) {
			debug('Book not found');
			res.render('books', {
										title: `No book found for ${req.body.isbn}`, 
										isbn : req.query.isbn} );
		} else {
			debug(`Found: ${book.title}`);
			/*debug("Full json %j", book);*/
			res.render('books', {
										title		: book.title, 
										isbn		: req.query.isbn,
										bookTitle: `${book.title} by ${book.authors}`,
										pic		: (typeof book.imageLinks != "undefined" ? book.imageLinks.thumbnail : undefined)} );
		}
	});
  
  
});

module.exports = router;

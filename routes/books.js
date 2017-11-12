var express = require('express');
var router = express.Router();

var isbn = require('node-isbn');

var debug = require('debug')('booky:books');

function objectInspector(object, result) {
    if (typeof object != "object")
        return "Invalid object";
    if (typeof result == "undefined")
        result = '';
/*
    if (result.length > 50)
        return "[RECURSION TOO DEEP. ABORTING.]";*/

    var rows = [];
    for (var property in object) {
        var datatype = typeof object[property];

        var tempDescription = result+'"'+property+'"';
        tempDescription += ' ('+datatype+') => ';
        if (datatype == "object")
            tempDescription += 'object : '+objectInspector(object[property],result+'  ');
        else
            tempDescription += object[property];

        rows.push(tempDescription);
    }

    return rows.join(result+"\n");
}

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
			/*debug("Full json %o", book);*/
			debug(objectInspector(book));			
			
			res.render('books', {
										title		: book.title, 
										isbn		: req.query.isbn,
										obj		: book } );
		}
	});
  
  
});

module.exports = router;

var express = require('express');
var router = express.Router();

var debug = require('debug')('booky:fibo');

var math = require('../math');


router.get('/', function (req, res, next) {
	res.render('fibo', {title: 'Fibonacci', fiboval: undefined});
});

router.post('/', function(req, res, next) {
	
	if (req.body.fibonum) {
		debug(`Fibo parameter: ${req.body.fibonum}`);
		res.render('fibo', {
									title: 'Fibonacci',
									fibonum: req.body.fibonum,
									fiboval: math.fibonacci(req.body.fibonum) }
								);
	} else {
		res.render('fibo', {title: 'Fibonacci', fiboval: undefined});
	}
});

module.exports = router;

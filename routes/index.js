var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Booky',
								description: 'my first attempt for a social bookshelf, based on Node js and Express',
								host: 'heroku.com'});
});

module.exports = router;

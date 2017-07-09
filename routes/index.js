var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Booky',
								description: 'My first attempt for a social bookshelf, based on Node js and Express',
								heroku: 'heroku.com'});
});

module.exports = router;

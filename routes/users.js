var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {	title: 'First modification of the skeleton',
								message: 'Mozilla dev network is so cool'} );
});

module.exports = router;

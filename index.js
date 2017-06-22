var express = require('express');
var test = require('oc_test');

var main_app = express();

main_app.get('/', function (req, res) {
	
	var content = '<a href="page_1">Page 1</a><br /> \
	<a href="page_2">Page 2</a><br /> \
	<a href="page_3">Page 3</a><br />'
	
	res.send(content);
});

main_app.get('/test', function (req, res) {
	res.send("<h1>This should have been deployed automaticaly after I git push</h1></br>" + test.hello("Salut les bgees"));
});


main_app.get('/page_1', function (req, res) {
	res.end("<h2>" + test.hello('page_1') + "</h2>");
});

main_app.get('/page_2', function (req, res) {
	res.end("<h2>" + test.hello('page_2') + "</h2>");
});

main_app.get('/page_3', function (req, res) {
	res.end("<h2>" + test.hello('page_3') + "</h2>");
});

main_app.get("/custom/:user_choice", function (req, res) {
	var body = "Choix de l\'utilisateur : " + test.hello(req.params.user_choice);

	res.render('custom.ejs', {title: "Tu peux pas test", content: body});
});

var port = process.env.PORT || 3000; /* process.env.PORT is pure heroku stuff I presume */

main_app.listen(port, function () {
	console.log('Server running on port '+port);
});

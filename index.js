var express = require('express');
var srv = express();

srv.get('/', function (req, res) {
  res.send("Salut !");
});


srv.get('/test', function (req, res) {
	res.send("<h1>This should have been deployed automaticaly after I git push</h1>");
});

var port = process.env.PORT || 3000;

srv.listen(port, function () {
  console.log('Server running on port '+port);
});

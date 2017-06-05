var express = require('express');
var srv = express();

srv.get('/', function (req, res) {
  res.send("Salut !");
});


srv.get('/test', function (req, res) {
	res.send("<h1>Est-ce que tu sais vraiment ce que tu fais ?</h1>");
});

var port = process.env.PORT || 3000;

srv.listen(port, function () {
  console.log('Server running on port '+port);
});

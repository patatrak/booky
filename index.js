var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello !');
});

app.get('/bonjour', function (req, res) {
  res.send('Bonjour !');
});

app.get('/', function (req, res) {
  res.send("Salut !");
});


app.get('/test', function (req, res) {
	res.send("<h1>Est-ce que tu sais vraiment ce que tu fais ?</h1>");
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server running on port '+port);
});

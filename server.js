// set up server
var express = require('express');
var app = express();
var port = 8080;

app.get('/mark', function (req, res) {
  res.send('Hello');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port);
console.log("App listening on port " + port);
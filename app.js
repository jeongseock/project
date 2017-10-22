// set up server
var express = require('express');
var app = express();
var port = 8080;


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || port);
console.log("App listening on port " + port);
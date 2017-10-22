// set up server
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname +'/public/index.html'));
})
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 5000);
console.log("App listening on port " + 5000);
// set up server
var express = require('express');
var app = express();
var path = require('path');
var apath = path.dirname(require.main.filename)

app.get('/', function (req, res) {
  res.sendFile('/public/index.html',{root: apath});
})
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 5000);
console.log("App listening on port " + 5000);
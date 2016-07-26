var express  = require('express');
var bodyParser = require('body-parser');
// var routes = require('./app.js');

var app = express();                  

app.use(express.static(__dirname + '/../app')); 
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '../app/index.html'); 
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

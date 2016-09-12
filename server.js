var express  = require('express');
var bodyParser = require('body-parser');
var http = require("http")

var app = express();                  
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); 

// app.get('/api/search', function(req, res){
//   http.get()
// })

var port = process.env.PORT || 8080;
app.set('port', port);


app.listen(port, function () {
  console.log('listening on port ' + port);
});

var express  = require('express');
var bodyParser = require('body-parser');

var app = express();                  

app.use(express.static(__dirname + '../public'))
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); 


var port = process.env.PORT || 8080;
app.set('port', port);


app.listen(port, function () {
  console.log('listening on port ' + port);
});

var express = require('express');
var app = express();

var port = process.env.PORT || 9292;

//assets directory
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.get('/', function(req,res){
  res.render('index');
});

app.listen(port);
console.log('Listening to port', port);

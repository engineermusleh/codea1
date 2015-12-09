var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/codea1');

app.get('/users',function(req,res){
	var users = db.get('user');
	console.log(users);
	res.send(users.toString());
});
app.get('/', function (req, res) {
  res.send('Index oage!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


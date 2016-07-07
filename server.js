//Timestamp Microservice
var express = require('express');
var app = express();



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Timestamp Microservice active on 8080:');
});
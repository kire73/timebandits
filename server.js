//Timestamp Microservice
var express = require('express');
var moment = require('moment');
var app = express();
var path = require('path');

app.get('/', function (req, res){
  var fileName = path.join(__dirname, 'index.html');
  
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/:id', function (req, res) {
  var now;
  
  if(/^\d{8}$/.test(req.params.id)){
    now = moment(req.params.id, 'X');
  } else now = moment(req.params.id, 'MMMM D, YYYY');
  
    if(now.isValid()) {
    res.json({
      unix: now.format('X'),
      natural: now.format('MMMM D, YYYY')
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
  res.send(now);
});

app.listen(8080, function () {
  console.log('https://stampede-evilloria.c9users.io/\nTimestamp Microservice active\nListening to port 8080:');
});
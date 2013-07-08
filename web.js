var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //var options = {};
  //options.encoding = 'utf-8';
  //var buf = new Buffer(256);
  //fs.readFileSync('index.html',options, function(err,data){
    //if (err) throw err;

    var buf  = new Buffer(fs.readFileSync('index.html'),'utf-8'); 
    console.log(buf.toString());
    response.send(buf.toString());
  //});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

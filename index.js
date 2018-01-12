var express = require('express');
var fs = require('fs');
var app = express();



app.get('/', function(req, res){
    console.log('GET /')
    var html = '<html><body><form method="post" action="http://localhost:3001">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
    //var html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.post('/', function(req, res){
    console.log('The payment is successful with these details:');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
	
	//log the file
    res.end('thanks');
});

port = 3001;
app.listen(port);
console.log('Listening at http://localhost:' + port)
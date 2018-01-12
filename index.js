var express = require('express');
var fs = require('fs');

var app = express();
var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
// Configure app to use bodyParser(). This will let us get the data from a POST
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
	bodyParser.json();
	bodyParser.urlencoded({
		extended: true
	});
    next();
});

//listen to post from payment form in http;//localhost:3000
app.post('/', function(req, res){
    console.log('The payment is successful with these details:');
    
	try{req.body = JSON.parse(Object.keys(req.body)[0])}catch(err){req.body = req.body}
	console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
	
	//log the file
    res.end('thanks');
});


port = 3001;
app.listen(port);
console.log('Listening at http://localhost:' + port)
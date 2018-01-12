const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))

//start angular application
app.get('/', function(req, res) {
	res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/core.js', function(req, res) {
	res.sendfile('core.js'); 
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
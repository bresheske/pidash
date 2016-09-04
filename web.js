// Dependencies
var express = require('express');
var fs = require('fs');
var http = require('http');
var bodyparser = require('body-parser');

// Local vars
var app = express();

// Enable public for jquery, bootstrap.
app.use(express.static('client'));
app.use(bodyparser.json());

// Index file.
app.get('/', function(req, res) {
	fs.readFile(__dirname + "/" + 'index.html', 'utf8', function(err, data) {
		res.end(data);
	});
});







// Spin the server up. Control-C to cancel.
var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
});

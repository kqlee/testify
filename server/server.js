var express = require('express');
var path = require('path');

var app = express();

// Log requests
app.use(express.logger('short'));

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));

// Normally, we would trigger a request to the database for our data
// but we're going to fake that for the sake of this sprint
var todos = [{ name: 'Client-side unit tests',  done: true},{  name: 'End-to-end workflow tests',  done: true},{  name: 'Visual tests',  done: true},{  name: 'Continous integration',  done: true},{  name: 'Code coverage reporting',  done: true},{  name: 'Server-side unit tests',  done: false},{  name: 'Client-server integration tests',  done: false}];

app.get('/todos', function(req, res){
  res.send({todos: todos});
});

// Get the port from environment variables
var port = process.env.PORT || 8000;

app.listen(port);

console.log('Server running on port %d', port);

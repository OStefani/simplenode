var http = require('http');
var server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'application/json'});
res.end('Hello World');
});

server.listen(8080, 'localhost', function() {
console.log("Server started")});



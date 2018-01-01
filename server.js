var http = require('http');
var port = process.env.API_PORT || 3000;

var server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'application/json'});
res.end('Hello World');
});

server.listen(port, 'localhost', function() {
console.log(`Server started at ${port}`)});

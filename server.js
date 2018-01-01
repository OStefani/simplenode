var http = require('http');
var server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'application/json'});
res.end('Hello World');
});

server.listen(8080, '188.166.97.82:4189', function() {
console.log("Server started")});



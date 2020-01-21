

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hello Whaaaa?");
    res.end();
}).listen(9876);

console.log('Yeahhhyyyy I am Connected!');
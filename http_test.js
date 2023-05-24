var http = require('http');

http.createServer(function(req, res) {
    //Write the header of response
    res.writeHead(200, {'Content-type': 'text/plain'});
    //Write the content of response
    res.end('Hello, JSON format failed');
}).listen(3000);

const port = 3000;

console.log(`Server is working on ${port}`);
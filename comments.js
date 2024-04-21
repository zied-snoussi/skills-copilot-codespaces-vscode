// Create web server
var http = require('http');
var server = http.createServer(function (req, res) {
    // Get the URL
    var url = req.url;
    console.log(url);
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Hello World!</h1></body></html>');
        res.end();
    } else if (url === '/skills') {
        skillsMember();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>404 Not Found</h1></body></html>');
        res.end();
    }
});
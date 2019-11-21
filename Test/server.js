const Http = require('http');

const server = Http.createServer((req, res) => {
    res.end('hello: ' + req.url);
});

server.listen(8080);
console.log("hello");

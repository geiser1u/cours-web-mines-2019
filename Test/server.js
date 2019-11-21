const Http = require('http');
const Fs = require('fs');
const server = Http.createServer((req, res) => {
    path = './' + req.url;
    Fs.readdir(path, (err, content) => {
        console.log(err);
        console.log(content);
        res.end(content.map(c => c.name));
    });
    res.end('hello: ' + req.url);
});

server.listen(8080);
console.log("hello");

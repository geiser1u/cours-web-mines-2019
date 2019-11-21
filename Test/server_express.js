const Express = require('express');
const app = Express();

app.get('/hello/:name', (req, res) => {
    res.end('hello: ' + req.params.name);
});

app.get('/messages', (req, res) => {
    res.end('Error 501');
});

app.get('/messages/:id', (req, res) => {
    res.end('Error 501');
});

app.post('/messages', (req, res) => {
    res.end('Error 501');
});

app.patch('/messages/:id', (req, res) => {
    res.end('Error 501');
});

app.delete('/messages/:id', (req, res) => {
    res.end('Error 501');
});

app.listen(3000);

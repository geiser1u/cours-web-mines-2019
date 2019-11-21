const Express = require('express');
const app = Express();

/*app.get('/hello/:name', (req, res) => {
    res.end('hello: ' + req.params.name);
});*/

app.get('/messages', (req, res) => {
    res.status(501).send();
});

app.get('/messages/:id', (req, res) => {
    res.status(501).send();
});

app.post('/messages', (req, res) => {
    res.status(501).send();
});

app.patch('/messages/:id', (req, res) => {
    res.status(501).send();
});

app.delete('/messages/:id', (req, res) => {
    res.status(501).send();
});

app.listen(3000);

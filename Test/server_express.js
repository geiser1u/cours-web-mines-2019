const Express = require('express');
const app = Express();
app.get('/hello/:name', (req, res) => {
    res.end('hello: ' + req.params.name);
});
app.listen(3000);
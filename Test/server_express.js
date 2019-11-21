const DB_NAME = 'tests-express-sqlite';
const Fs = require('fs');
const Path = require('path');
const Sqlite = require('sqlite3');

try {
    Fs.unlinkSync(`./${DB_NAME}`);
}
catch (_ign) { }

const DB = new Sqlite.Database(DB_NAME);

const init = Fs.readFileSync(Path.join(process.cwd(), './database/init.sql'), 'utf-8');

DB.exec(init);

module.exports = DB;

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

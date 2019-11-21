const DB_NAME = 'messages';
const Express = require('express');
const app = Express();
const Sqlite = require('sqlite3');

/*app.get('/hello/:name', (req, res) => {
    res.end('hello: ' + req.params.name);
});*/

let DB = new Sqlite.Database(DB_NAME);

app.get('/messages', (req, res) => {
    sql = "SELECT * FROM MESSAGES";
    DB.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(rows);
    });
});

app.get('/messages/:id', (req, res) => {
    sql = `SELECT * FROM MESSAGES WHERE ID = ${req.params.id}`;
    DB.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(rows);
    });
});

app.post('/messages', (req, res) => {
    sql = `INSERT INTO MESSAGES
                (AUTHOR, CONTENT, DATE)
           VALUES
                (${req[1]}, ${req[2]}, ${req[3]});
    `;
    DB.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
});

app.patch('/messages/:id', (req, res) => {
    sql = "SELECT * FROM MESSAGES";
    DB.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(rows);
    });
});

app.delete('/messages/:id', (req, res) => {
    sql = "SELECT * FROM MESSAGES";
    DB.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(rows);
    });
});

app.listen(3000);

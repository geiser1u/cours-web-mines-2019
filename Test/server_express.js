const DB_NAME = 'messages';
const Express = require('express');
const app = Express();
const Sqlite = require('sqlite3');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let DB = new Sqlite.Database(DB_NAME);

app.get('/messages', (req, res) => {
    sql = "SELECT * FROM MESSAGES"
    DB.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(rows);
    });
});

app.get('/messages/:id', (req, res) => {
    sql = "SELECT * FROM MESSAGES WHERE ID = " + req.params.id;
    DB.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(rows);
    });
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    var author = req.body.author;
    var content = req.body.content;
    sql = `INSERT INTO MESSAGES
                (AUTHOR, CONTENT)
           VALUES
                (?, ?);
    `;
    DB.run(sql, [author, content], function (err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
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

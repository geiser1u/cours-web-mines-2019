const DB_NAME = 'messages';
const Express = require('express');
const app = Express();
const Sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const { celebrate, Joi, errors } = require('celebrate');

app.use(bodyParser.json());
app.use(errors());

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

app.get('/messages/:id', celebrate({
    body: Joi.object().keys({
        id: Joi.number().integer().required(),
    })
}), (req, res) => {
    sql = "SELECT * FROM MESSAGES WHERE ID = ?";
    DB.all(sql, [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(rows);
    });
});

app.post('/messages', celebrate({
    body: Joi.object().keys({
        author: Joi.string().required(),
        content: Joi.string().required()
    })
}), (req, res) => {
    sql = `INSERT INTO MESSAGES
                (AUTHOR, CONTENT)
           VALUES
                (?, ?);
    `;
    DB.run(sql, [req.body.author, req.body.content], function (err) {
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

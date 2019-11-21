const DB_NAME = 'messages';
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

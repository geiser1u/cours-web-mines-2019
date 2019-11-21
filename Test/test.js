const Fs = require('fs');

console.log(Fs.readdirSync('./'));

Fs.readdir('./', (err, content) => {
    console.log(err);
    console.log(content);
});

console.log("hello");

const fs = require('node:fs'); // File System module Built-in module in Node.js

const content = fs.readFileSync('./notes.txt', 'utf-8');
console.log(content);

fs.writeFileSync('./hello.txt', 'Hello from fs module'); 
// This will create a new file called hello.txt and write the specified content to it. If the file already exists, it will overwrite the existing content.

fs.appendFileSync('./hello.txt', '\nThis is an appended line.');


fs.mkdirSync('./game'); // This will create a new directory called game in the current working directory.

fs.rmdirSync('game'); // This will remove the directory called myFolder. Note that the directory must be empty before it can be removed.
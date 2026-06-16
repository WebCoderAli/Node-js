const fs = require('fs'); // File System module Built-in module in Node.js

const content = fs.readFileSync('./notes.txt', 'utf-8');
console.log(content);


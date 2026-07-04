const http = require('http');

const logical = require('./error');

const server = http.createServer((req, res) => {
    console.log('Request received:', req.method, req.url);
    logical();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
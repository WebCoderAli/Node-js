const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body>');
    res.write('<a href="/">Home</a> <br> ');
    res.write('<a href="/men">Men</a> <br> ');
    res.write('<a href="/women">Women</a> <br> ');
    res.write('<a href="/kids">Kids</a> <br> ');
    res.write('<a href="/cart">Cart</a> <br> ');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/men') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Men Page</title></head>');
    res.write('<body><h1>This is the men page</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Women Page</title></head>');
    res.write('<body><h1>This is the women page</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Kids Page</title></head>');
    res.write('<body><h1>This is the kids page</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Cart Page</title></head>');
    res.write('<body><h1>This is the cart page</h1></body>');
    res.write('</html>');
    return res.end();
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
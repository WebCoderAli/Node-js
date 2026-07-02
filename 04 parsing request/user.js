const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body>');
        res.write('<h1>Enter your details</h1>');
        res.write('<form action="/details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Username"><br><br>');
        res.write('<input type="email" name="email" placeholder="Email"><br><br>');
        res.write('<input type="password" name="password" placeholder="Password"><br><br>');
        res.write('<input type="radio" name="gender" value="male"> Male<br>');
        res.write('<input type="radio" name="gender" value="female"> Female<br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if(req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>This is the about page</h1></body>');
        res.write('</html>');
        return res.end();
    } else if(req.url === '/details' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });

        req.on("end", () => {
            const fullBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullBody);
            const bodyObj = Object.fromEntries(params)
            // for (const [key , val] of params.entries()){
            //     bodyObj[key] = val
            
            fs.writeFileSync('userDetails.txt', JSON.stringify(bodyObj));

            console.log(bodyObj);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
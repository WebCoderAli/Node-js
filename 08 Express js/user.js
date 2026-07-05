const userHandler = (req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to the Home Page</h1>");
        res.write("<a href='/register'>Register</a>");
        return res.end();
    }
    else if(req.url === "/register"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Register Page</h1>");
        res.write("<form method='POST' action='/newuser'>");
        res.write("<input type='text' name='username' placeholder='Username' required>");
        res.write("<input type='password' name='password' placeholder='Password' required>");
        res.write("<button type='submit'>Register</button>");
        res.write("</form>");
        return res.end();
    }  else if (req.url === "/newuser" && req.method === "POST") {
    const body = [];

    req.on("data", chunk => {
        body.push(chunk);
    });

    req.on("end", () => {
        const fullBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullBody);
        const bodyObj = Object.fromEntries(params);

        console.log("New user registered:", bodyObj);

        res.writeHead(302, {
            Location: "/"
        });

        res.end();
    });

    return;
}
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write("<h1>404 Not Found</h1>");
    return res.end();
}

module.exports = userHandler;
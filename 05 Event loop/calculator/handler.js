const sumReqHandler = require('./sum');

const reqHandler = (req, res) => {
    
    console.log(req.url , req.method);

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Welcome to the Calculator</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
        </html>    
    `);

        return res.end();
    } else if (req.url.toLowerCase() === "/calculator") {

        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Calculator</h1>
                <form action="/calculate-result" method="POST">
                    <input type="number" name="num1" placeholder="Enter first number" required>
                    <input type="number" name="num2" placeholder="Enter second number" required>
                    <button type="submit">Calculate</button>
                </form>
            </body>
        </html>    
    `);

        return res.end();
    } else if(req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
        return sumReqHandler(req, res);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>404 Not Found</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <a href="/">Go to Home</a>
            </body>
        </html>    
    `);

    return res.end();

};

module.exports = reqHandler;
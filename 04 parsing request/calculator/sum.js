const sumReqHandler = (req, res) => {
    let body = [];
    console.log(req.url , req.method);

    req.on('data', chunk => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const formData = new URLSearchParams(parsedBody);
        const objectData = Object.fromEntries(formData.entries());
        console.log(objectData);
        const result = Number(objectData.num1) + Number(objectData.num2);
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>Calculator Result</title>
            </head>
            <body>
                <h1>Calculator Result</h1>
                <p>The sum of ${objectData.num1} and ${objectData.num2} is ${result}.</p>
                <a href="/calculator">Go back to Calculator</a>
            </body>
        </html>`);
        return res.end();
    });

};

module.exports = sumReqHandler;
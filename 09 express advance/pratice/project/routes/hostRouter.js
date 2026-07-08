const express = require("express")

const hostRouter = express.Router()

hostRouter.get('/contact-us', (req, res, next) => {
    res.send(`<h1>Add Your House</h1>
    <br>
    <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Your House Name">
        <button type="submit">Submit</button>
    </form>
    <a href="/">Back to Home</a>`);
});


hostRouter.post('/contact-us', (req, res, next) => {
    const houseName = req.body.name;
    console.log(`House Name: ${houseName}`);
    res.send(`<h1>Thank you for adding your house: ${houseName}</h1>
    <br>
    <a href="/">Back to Home</a>`);
});

module.exports = hostRouter;
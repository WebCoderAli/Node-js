const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
    res.send(`<h1>Welcome to Home Rented</h1>
    <br>
    <a href="/contact-us">add a property</a>`);
});

module.exports = userRouter;
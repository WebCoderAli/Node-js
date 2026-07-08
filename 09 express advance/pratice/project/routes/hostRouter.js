const path = require("path")

const express = require("express")

const rootDir = require("../utils/pathUtil")

const hostRouter = express.Router()

hostRouter.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir , "views" , "contact-us.html"));
});


hostRouter.post('/contact-us', (req, res, next) => {
    const houseName = req.body.name;
    console.log(`House Name: ${houseName}`);
    res.sendFile(path.join(rootDir , "views" , "thank-you.html"));
});

module.exports = hostRouter;
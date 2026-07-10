const path = require("path")

const express = require("express")

const rootDir = require("../utils/pathUtil")

const hostRouter = express.Router()

hostRouter.get('/contact-us', (req, res, next) => {
    res.render("contact-us", {registerHouse : registerHouse});
});

const registerHouse = []
hostRouter.post('/contact-us', (req, res, next) => {
    registerHouse.push(req.body.name)
    res.render("thank-you" , {registerHouse : registerHouse});
});

exports.hostRouter = hostRouter;

exports.registerHouse = registerHouse;
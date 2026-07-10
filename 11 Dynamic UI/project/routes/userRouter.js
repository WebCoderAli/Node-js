const path = require("path")

const express = require('express');

const userRouter = express.Router();

const rootDir = require("../utils/pathUtil");
const { registerHouse } = require("./hostRouter");

userRouter.get('/', (req, res, next) => {
    res.render("home" , {registerHouse : registerHouse});
});

module.exports = userRouter;
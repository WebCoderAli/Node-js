const express  = require("express")

const path = require("path")

const rootDir = require("../utils/pathUltis")

const contactRouter = express.Router()

contactRouter.get("/contact-us", (req, res , next) => {
  res.sendFile(path.join(rootDir , "views" , "contact.html"));
});

contactRouter.post("/contact-us", (req, res , next) => {
  console.log('Form submitted:', req.body);
  res.sendFile(path.join(rootDir , "views" , "sucess.html"));
});


module.exports = contactRouter
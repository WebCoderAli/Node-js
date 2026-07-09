const express = require('express');

const path = require("path")

const bodyParser = require('body-parser');

const app = express();

const rootDir = require("./utils/pathUltis")

const homeRouter = require("./routes/homeRoute")

const contactRouter = require("./routes/contactRoute")

app.use(homeRouter)

app.use(contactRouter)

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req , res , next) =>{
  res.sendFile(path.join(rootDir , "views" , "404.html"))
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
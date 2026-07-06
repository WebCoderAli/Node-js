
const userHandler = require('./user');

const express = require('express');

const app = express();

app.use("/", (req , res, next) => {
  console.log('In the first middleware!');
  next(); // This will pass the request to the next middleware in line
});

app.post("/submit-user", (req, res, next) => {
  console.log('In the second middleware!');
  res.send('<h1>Submitted!</h1>');
});

app.get("/", (req, res , next) => {
  res.send('<h1>Hello from Express!</h1>');
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
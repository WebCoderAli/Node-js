const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use((req , res, next) => {
  console.log('In the first middleware!',req.url , req.method);
  next();
});

app.use((req, res, next) => {
  console.log('In the second middleware!',req.url , req.method);
  next();
});

app.use((req, res, next) => {
  console.log('In the third middleware!',req.url , req.method);
  next();
});

app.get("/", (req, res , next) => {
  res.send(`<h1>Home Page</h1> <br>
    <a href="/contact-us">Contact Us</a>`);
});

app.get("/contact-us", (req, res , next) => {
  res.send(`<h1>Contact Us Page</h1> 
    <br>
    <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Your Name">
        <input type="email" name="email" placeholder="Your Email">
        <button type="submit">Submit</button>
    </form>
    <br>
    <a href="/">Home</a>`);
});

app.post("/contact-us", (req, res , next) => {
  
  console.log('Form submitted:', req.body);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact-us", (req, res , next) => {
  console.log('Form submitted:', req.body);
  res.send(`<h1>Thank you for contacting us! ${req.body.name}</h1> 
    <br>
    <a href="/">Home</a>`);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
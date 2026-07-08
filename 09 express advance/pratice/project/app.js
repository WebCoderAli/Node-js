const express = require('express');

const app = express();

const hostRouter = require("./routes/hostRouter")

const userRouter = require("./routes/userRouter")

app.use(express.urlencoded({ extended: true }));

app.use(userRouter)

app.use(hostRouter)

app.use((req, res, next) =>{
    res.status(200).send(`<h1>404 page is not found</h1>`)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
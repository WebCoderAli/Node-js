const path = require("path")

const express = require('express');

const app = express();

const hostRouter = require("./routes/hostRouter")

const userRouter = require("./routes/userRouter")

const rootDir = require("./utils/pathUtil")

app.use(express.urlencoded({ extended: true }));

app.use(userRouter)

app.use(hostRouter)

app.use((req, res, next) =>{
    res.status(200).sendFile(path.join(rootDir , "views" , "404.html"))
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
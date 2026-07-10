const path = require("path")

const express = require('express');

const app = express();

app.set("view engine" , "ejs");

app.set("views" , "views")

const {hostRouter} = require("./routes/hostRouter")

const {registerHouse} = require("./routes/hostRouter")

const userRouter = require("./routes/userRouter")

const rootDir = require("./utils/pathUtil")

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));


app.use(userRouter)

app.use(hostRouter)

app.use((req, res, next) =>{
    res.status(200).render("404" , {registerHouse : registerHouse})
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
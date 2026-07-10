const express = require("express")
const path = require("path")
const registeredHomes = require("./data/registeredHomes")

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

const userRoutes = require("./routes/userRoute")
const hostRoutes = require("./routes/hostRoute")

app.get("/", (req, res) => {
    res.render("home", { title: "Home", activePage: "home", homeCount: registeredHomes.length })
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About Us", activePage: "about" })
})

app.use("/user", userRoutes)
app.use("/host", hostRoutes)

app.use((req, res) => {
    res.status(404).render("404", { title: "Page Not Found", activePage: "" })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
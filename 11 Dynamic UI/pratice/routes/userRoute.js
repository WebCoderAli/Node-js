const express = require("express")
const router = express.Router()
const registeredHomes = require("../data/registeredHomes")

router.get("/", (req, res) => {
    res.render("user", { title: "User Registration", activePage: "user", houses: registeredHomes })
})

router.get("/listings", (req, res) => {
    res.redirect("/")
})

module.exports = router

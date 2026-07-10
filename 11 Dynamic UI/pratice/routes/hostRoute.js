const express = require("express")
const router = express.Router()

const registeredHomes = require("../data/registeredHomes")

router.get("/", (req, res) => {
    res.render("host", { title: "Host Dashboard", count: registeredHomes.length })
})

router.get("/register", (req, res) => {
    res.render("host-register", { title: "Register Your Home" })
})

router.post("/register", (req, res) => {
    const { name, email, address, price, description } = req.body
    registeredHomes.push({ name, email, address, price, description, date: new Date() })
    res.render("thank", { name: name || "Host", title: "Thank You" })
})

router.get("/listings", (req, res) => {
    res.render("host-listings", { title: "Host Listings", houses: registeredHomes })
})

module.exports = router

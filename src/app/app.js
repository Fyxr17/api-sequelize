const express = require('express')
const router = require("../router/product.router")
const app = express()
const morgan = require("morgan")

app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.send('Lebron the GOAT')
})

app.use(express.json())
app.use("/api/v1", router)

module.exports = app;
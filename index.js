const express = require('express')
const app = express()

require('dotenv').config()
const mongoose = require('mongoose')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.listen(3000)
const express = require('express')
const mongoose = require('mongoose')
const patientRoutes = require('./routes/patientRoutes')
require('dotenv').config()

const app = express()


app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use('/patients', patientRoutes)


const user = process.env.USER_DB
const password = process.env.PASSWORD_DB
mongoose.connect(`mongodb+srv://${user}:${password}@globalhealthcluster.f4jhb.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(3000)
    console.log('Conectamos ao MongoDB Atlas')
})
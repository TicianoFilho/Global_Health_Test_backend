const express = require('express')
const mongoose = require('mongoose')
const patientRoutes = require('./routes/patientRoutes')
require('dotenv').config()
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

//<swagger>
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Patient API',
            version: '1.0.0',
            discription: 'A simple Express Patient API'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./routes/*.js']
}

const specs = swaggerJsDoc(options)
//</swagger>

const app = express()

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

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
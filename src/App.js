require('dotenv').config()

const express = require('express')
const swaggerUI = require('swagger-ui-express')

const patientRoutes = require('./routes/patientRoutes')
const specs = require('./config/config')
require('./database/connection')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.swagger()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(express.json())
  }

  routes () {
    this.express.use('/patients', patientRoutes)
  }

  swagger () {
    this.express.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
  }
}

module.exports = new App().express

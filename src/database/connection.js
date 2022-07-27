const mongoose = require('mongoose')

const urlDatabase = process.env.URL_DATABASE

const connect = mongoose.connect(urlDatabase)
  .then(() => {
    console.log('Conectado ao MongoDB')
  })

module.exports = connect

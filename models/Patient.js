const mongoose = require('mongoose')

const Patient = mongoose.model('patient', {
    name : String,
    healthInsuranceCardId : Number,
    address : String,
    createdAt : Date
})

module.exports = Patient
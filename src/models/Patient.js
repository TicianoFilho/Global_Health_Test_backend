const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  healthInsuranceCardId: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: false
  }
})

const Patient = mongoose.model('patient', schema)

module.exports = Patient

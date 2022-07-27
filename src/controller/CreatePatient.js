const modelPatient = require('../models/Patient')

class CreatePatient {
  async createPatient (req, res) {
    try {
      const newPatient = req.body
      const patient = await modelPatient.create(newPatient)

      return res.status(200).json(patient)
    } catch (error) {
      return res.status(400).json({
        details: {
          name: 'Bad Request',
          description: error.message
        }
      })
    }
  }
}

module.exports = new CreatePatient()

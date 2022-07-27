const modelPatient = require('../models/Patient')

class FindAll {
  async find (req, res) {
    try {
      const patients = await modelPatient.find({
        $or: [{
          active: 'true'
        }]
      })
      return res.status(200).json(patients)
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

module.exports = new FindAll()

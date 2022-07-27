const modelPatient = require('../models/Patient')

class UpdatePatient {
  async updatePatient (req, res) {
    try {
      const { id } = req.params
      const newPatient = req.body

      const patient = await modelPatient.findByIdAndUpdate(id, newPatient, { new: true })

      if (!patient) {
        return res.status(404).json({
          details: {
            name: 'Not Found',
            description: 'patient não encontrado'
          }
        })
      }

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

module.exports = new UpdatePatient()

const Patient = require('../models/Patient')
const router = require('express').Router()

//salva paciente
router.post('/', async (req, res) => {
    const {name, healthIsuranceCardId, address, createdAt} = req.body

    const patient = {
        name,
        healthIsuranceCardId,
        address,
        createdAt
    }

    try {
        await Patient.create(patient)
        res.status(201).json({ message : 'Paciente inserido com sucesso!'})
    } catch (error) {
        res.status(500).json({error : error})
    }

})

//busca todos os pacientes
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find()
        res.status(200).json(patients)
    } catch (error) {
        res.status(500).json({error : error})
    }

})

//busca apenas um paciente
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const patient = await Patient.findById(id)
        res.status(200).json(patient)
    } catch (error) {
        res.status(500).json({error : error}) 
    }

})

//atualiza parcialmente o paciente
router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const {name, healthIsuranceCardId, address, createdAt} = req.body
    const patient = {
        name,
        healthIsuranceCardId,
        address,
        createdAt
    }

    try {
        const updatedPatient = await Patient.updateOne({_id : id}, patient)
        if (updatedPatient.matchedCount === 0) {
            res.status(422).json({message: 'Paciente não encontrado.'})
        }
        res.status(200).json({patient})
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//remove o paciente
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const patient = await Patient.findByIdAndDelete(id)
        res.status(200).json({message: `Paciente de id ${id} foi removido com sucesso.`})
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router
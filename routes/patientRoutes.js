const Patient = require('../models/Patient')

const router = require('express').Router()

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

router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find()
        res.status(200).json(patients)
    } catch (error) {
        res.status(500).json({error : error})
    }

})

module.exports = router
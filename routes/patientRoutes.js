const Patient = require('../models/Patient')
const router = require('express').Router()

/**
 * @swagger
 * components:
 *    schemas:
 *       Patient:
 *          type: object
 *          required: 
 *              - name
 *          properties:
 *              name:
 *                  type: String
 *                  description: The name of the patient
 *              healthInsuranceCardId:
 *                  type: Number
 *                  description: The id of the patient's health insurance card
 *              address:
 *                  type: String
 *                  description: The patient's address
 *              createdAt:
 *                  type: Date
 *                  description: the date the information was saved
 *          example: 
 *              name: Ticiano Filho                 
 *              healthInsuranceCardId: 123456789                  
 *              address: Rua Luíz de Castro, 1182                  
 *              createdAt: 2022-07-26                  
 */

/**
 * @swagger
 * tags:
 *  name: Patients
 *  description: The patient managing API
 */

/**
 * @swagger
 * /patients:
 *    get:
 *      summary: Returns the list of all patients
 *      tags: [Patients]
 *      responses:
 *          200:
 *              description: The list of patients
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Patient' 
 */

//busca todos os pacientes
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find()
        res.status(200).json(patients)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

/**
 * @swagger
 * /patients/{id}:
 *    get:
 *      summary: Get the patient by id
 *      tags: [Patients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The patient id
 *      responses:
 *          200:
 *              description: The patient iformation by id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Patient'
 *          500:
 *              description: Some server error.
 */

//busca apenas um paciente
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const patient = await Patient.findById(id)

        res.status(200).json(patient)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

/**
 * @swagger
 * /patients:
 *    post:
 *      summary: Create a new patient
 *      tags: [Patients]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Patient'
 *      responses:
 *          200: 
 *              description: The patient was successful created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Patient'
 *          500:
 *              description: Some server error.
 *                      
 *    
 */

//salva paciente
router.post('/', async (req, res) => {
    const { name, healthIsuranceCardId, address, createdAt } = req.body

    const patient = {
        name,
        healthIsuranceCardId,
        address,
        createdAt
    }

    if (!name) {
        res.status(422).json({ message: 'O nome é obrigatório.' })
        return
    }

    try {
        await Patient.create(patient)
        res.status(201).json({ message: 'Paciente inserido com sucesso!' })
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

//atualiza parcialmente o paciente
router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const { name, healthIsuranceCardId, address, createdAt } = req.body
    const patient = {
        name,
        healthIsuranceCardId,
        address,
        createdAt
    }

    try {
        const updatedPatient = await Patient.updateOne({ _id: id }, patient)
        if (updatedPatient.matchedCount === 0) {
            res.status(422).json({ message: 'Paciente não encontrado.' })
            return
        }
        res.status(200).json({ patient })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//remove o paciente
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const patient = await Patient.findByIdAndDelete(id)
        res.status(200).json({ message: `Paciente de id ${id} foi removido com sucesso.` })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router
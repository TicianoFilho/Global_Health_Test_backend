const router = require('express').Router()

const FilePatientController = require('../controller/FilePatient')
const FindAllController = require('../controller/FindAll')
const RecoverPatientController = require('../controller/RecoverPatient')
const FindByIdController = require('../controller/FindById')
const CreatePatient = require('../controller/CreatePatient')
const UpdatePatient = require('../controller/UpedatePatient')
const DeletePatient = require('../controller/DeletePatient')

router.get('/', FindAllController.find)
router.get('/recover/:id', RecoverPatientController.recoverPatient)
router.get('/:id', FindByIdController.findById)
router.post('/', CreatePatient.createPatient)
router.patch('/:id', UpdatePatient.updatePatient)
router.delete('/file/:id', FilePatientController.filePatient)
router.delete('/:id', DeletePatient.deletePatient)

module.exports = router

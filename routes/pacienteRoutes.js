const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.post('/pacientes', pacienteController.postPaciente);
router.get('/pacientes/:id', pacienteController.getPacienteById);
router.get('/pacientes', pacienteController.getPacientes);

module.exports = router;

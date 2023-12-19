const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.post('/pacientes', pacienteController.postPaciente);
router.get('/pacientes/:id', pacienteController.getPacienteById);
router.get('/pacientes', pacienteController.getPacientes);
router.put('/pacientes/:id', pacienteController.actualizarPaciente);
router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

module.exports = router;

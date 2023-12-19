const mongoose = require('mongoose');
const Paciente = require('../models/pacienteModel');

exports.postPaciente = async (req, res) => {
  try {
    const nuevoPaciente = new Paciente(req.body);
    await nuevoPaciente.save();
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al guardar el paciente.' });
  }
};

exports.getPacienteById = async (req, res) => {
  try {
    const pacienteId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(pacienteId)) {
      return res.status(400).json({ mensaje: 'ID no válido.' });
    }
    const paciente = await Paciente.findById(pacienteId);
    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado.' });
    }
    res.json(paciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el paciente por ID.' });
  }
};

exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener la lista de pacientes.' });
  }
};

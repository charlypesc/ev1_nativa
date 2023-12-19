const mongoose = require('mongoose');
const Paciente = require('../models/pacienteModel');
//POST
exports.postPaciente = async (req, res) => {
  try {
    const nuevoPaciente = new Paciente(req.body);
    nuevoPaciente.fechaIngreso=new Date.now();
    nuevoPaciente.revisado=false;
    await nuevoPaciente.save();
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al guardar el paciente.' });
  }
};
//GET ** TODOS
exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener la lista de pacientes.' });
  }
};

//GET ** BY ID
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

//ACTUALIZAR
exports.actualizarPaciente = async (req, res) => {
  try {
    const pacienteId = req.params.id;
    const datosActualizados = req.body;

    if (!mongoose.Types.ObjectId.isValid(pacienteId)) {
      return res.status(400).json({ mensaje: 'ID no válido.' });
    }

    const pacienteActualizado = await Paciente.findByIdAndUpdate(pacienteId, datosActualizados, { new: true });

    if (!pacienteActualizado) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado.' });
    }
    res.json(pacienteActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el paciente.' });
  }
};


//ELIMINAR

exports.eliminarPaciente = async (req, res) => {
  try {
    const pacienteId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(pacienteId)) {
      return res.status(400).json({ mensaje: 'ID no válido.' });
    }

    const pacienteEliminado = await Paciente.findByIdAndDelete(pacienteId);
    if (!pacienteEliminado) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado.' });
    }

    res.json(pacienteEliminado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el paciente.' });
  }
};
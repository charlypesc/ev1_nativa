const mongoose = require('mongoose'); 
 const pacienteSchema = new mongoose.Schema({
      rut: String,
      nombre: String,
      edad: Number,
      sexo: String,
      fotoPersonal: String,
      fechaIngreso: Date,
      enfermedad: String,
      revisado: Boolean
    });
    
    const Paciente = mongoose.model('Paciente', pacienteSchema);
    module.exports = Paciente
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    nombre: String,
    apellidos: String,
    area: String,
    especialidad: String,
    carrera: String,
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('users',user);
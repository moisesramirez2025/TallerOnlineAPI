const mongoose = require('mongoose');

const producto = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    precio: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Producto', producto);
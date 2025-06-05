const express = require('express');
const router = express.Router();
const cotizacionControl = require('../controllers/cotizacionControlador');

// Ruta para crear una nueva cotización
router.post('/cotizaciones', cotizacionControl.crearCotizacion);

// Ruta para listar todas las cotizaciones
router.get('/cotizaciones', cotizacionControl.listarCotizaciones);

// Ruta para eliminar una cotización por ID
router.delete('/cotizaciones/:id', cotizacionControl.eliminarCotizacion);

module.exports = router;
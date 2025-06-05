const express = require('express');
const router = express.Router();
const productoControl = require('../controllers/productoControlador');

router.post('/productos', productoControl.crearProducto);
router.get('/productos', productoControl.listarProductos);
router.delete('/productos/:id', productoControl.eliminarProducto);

module.exports = router;
const express = require('express');
const router = express.Router();
const contactoControl = require('../controllers/contactoControl');

router.post('/contactos', contactoControl.crearContacto);
router.get('/contactos', contactoControl.listarContactos);
router.delete('/contactos/:id', contactoControl.eliminarContacto);

module.exports = router;
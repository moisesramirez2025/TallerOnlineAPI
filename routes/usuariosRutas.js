const express = require("express");
const router = express.Router();
const ingresoControl = require("../controllers/ManejoUsuario/ingreso");
const registroControl = require("../controllers/ManejoUsuario/registro");

// Ruta para registrar usuario
router.post("/usuarios/registro", registroControl.registrarUsuario);

// Ruta para iniciar sesión
router.post("/usuarios/login", ingresoControl.iniciarSesion);

module.exports = router;

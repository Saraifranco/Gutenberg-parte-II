//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar el mainController
const mainController = require('../controllers/mainController');

//TODO: agregar el controller home, registro, login, carrito de compras, detalle producto
router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/registro", mainController.registro);
router.get("/detalle-producto", mainController.detalleProducto);
router.get("/carrito-compras", mainController.carritoCompras);
router.get("/editar-producto", mainController.editarProducto);
router.get("/crear-producto", mainController.crearProducto);

//TODO: agregar el modulo
module.exports = router;


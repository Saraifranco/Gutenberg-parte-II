//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index, login, registro, carrito compras. detalle producto 
const mainController = {
    index: function(req, res){
        res.render("index");
    },
    
    login: function(req, res){
        res.render("login");
    },
    
    registro: function(req, res){
        res.render("registro");
    },

    detalleProducto: function(req, res){
        res.render("detalle-producto");
    },

    carritoCompras: function(req, res){
        res.render("carrito-compras");
    },
    editarProducto: function(req, res){
        res.render("editar-producto");
    },
    crearProducto: function(req, res){
        res.render("crear-producto");
    },
};

//TODO: agregar exportar el modulo
module.exports = mainController;
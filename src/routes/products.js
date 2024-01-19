const express = require('express');
const router = express.Router();
const {detail,example, dashboard,create,formCreate,formUpdate,update,productDelete} = require("../controllers/productsController");
const sessionValidate = require("../middleware/sessionValidate");
const isAdmin = require("../middleware/isAdminValidate");
/* GET home page. */
router
//Listar productos
.get('/dashboard', isAdmin, dashboard)

//Crear productos
.get('/formCreate', isAdmin , formCreate)
.post('/create', create)

//Ver productos
.get('/detail/:id', detail)

//Actualizar productos
.get('/formUpdate/:id',isAdmin, formUpdate)
.put('/update/:id', update)

//Borrar productos
.delete('/delete/:id', productDelete)

//Ejemplo para Mayco
.get('/carrito', sessionValidate, example);

module.exports = router;
const express = require('express');
const router = express.Router();
const {detail,example, dashboard,create,formCreate,formUpdate,update,productDelete} = require("../controllers/productsController");
/* GET home page. */
router
//Listar productos
.get('/dashboard', dashboard)

//Crear productos
.get('/formCreate', formCreate)
.post('/create', create)

//Ver productos
.get('/detail/:id', detail)

//Actualizar productos
.get('/formUpdate/:id',formUpdate)
.put('/update/:id', update)

//Borrar productos
.delete('/delete/:id', productDelete)

//Ejemplo para Mayco
.get('/example', example);

module.exports = router;
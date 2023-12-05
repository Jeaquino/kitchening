const express = require('express');
const router = express.Router();
const {detail,example, dashboard,create} = require("../controllers/productsController");
/* GET home page. */
router
.get('/dashboard', dashboard)
.post('/create', create)
.get('/detail/:id', detail)
.get('/example', example);

module.exports = router;
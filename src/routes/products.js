const express = require('express');
const router = express.Router();
const {detail,example} = require("../controllers/productsController");
/* GET home page. */
router.get('/detail', detail);
router.get('/example', example);

module.exports = router;
const express = require('express');
const router = express.Router();
const {detail} = require("../controllers/productsController");
/* GET home page. */
router.get('/', detail);

module.exports = router;
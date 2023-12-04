const express = require('express');
const router = express.Router();
const {login,register} = require("../controllers/usersController");
/* GET home page. */
router
.get('/login', login)
.get('/register', register)

module.exports = router;
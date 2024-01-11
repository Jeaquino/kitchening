const express = require('express');
const router = express.Router();
const {login,register,createUser,processlogin} = require("../controllers/usersController");
/* GET home page. */
router
.get('/login', login)
.post('/login', processlogin)
.get('/register', register)
.post('/register', createUser)

module.exports = router;
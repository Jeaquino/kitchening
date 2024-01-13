const express = require('express');
const router = express.Router();
const {login,register,createUser,processlogin} = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidator");
/* GET home page. */



router
.get('/login', login)
.post('/login', loginValidator, processlogin)
.get('/register', register)
.post('/register', createUser)

module.exports = router;
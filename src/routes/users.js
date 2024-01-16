const express = require('express');
const router = express.Router();
const {login,register,createUser,processlogin} = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidator");
const upload = require('../validations/uploadUser');
const registerValidator = require("../validations/registerValidator");
/* GET home page. */

router
.get('/login', login)
.post('/login', loginValidator, processlogin)
.get('/register', register)
.post('/register', upload.single('image'), registerValidator, createUser)

module.exports = router;
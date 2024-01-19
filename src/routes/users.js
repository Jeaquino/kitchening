const express = require('express');
const router = express.Router();
const {login,register,createUser,processlogin,profile, dashboard} = require("../controllers/usersController");
const loginValidator = require("../validations/loginValidator");
const upload = require('../validations/uploadUser');
const registerValidator = require("../validations/registerValidator");
const sessionValidate = require("../middleware/sessionValidate");
const isAdmin = require("../middleware/isAdminValidate");

/* GET home page. */

router
.get('/login', login)
.post('/login', loginValidator, processlogin)
.get('/register', register)
.post('/register', upload.single('image'), registerValidator, createUser)
.get('/profile',sessionValidate, profile)
.get('/dashboard', isAdmin, dashboard)
module.exports = router;
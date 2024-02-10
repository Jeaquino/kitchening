const express = require('express');
const router = express.Router();
const {login,register,createUser,processlogin,profile, dashboard,logout, processUpdate,list, destroy} = require("../controllers/usersController");
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
.get('/profile/:id',sessionValidate, profile)
.put('/profile/:id', upload.single('image'), processUpdate)
.get('/dashboard', isAdmin, dashboard)
.get('/logout', logout)
.get('/list/:surname',list)
.delete('/delete/:id',destroy)
module.exports = router;
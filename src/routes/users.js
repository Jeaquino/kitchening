const express = require('express');
const router = express.Router();
const {login,register,createUser} = require("../controllers/usersController");
/* GET home page. */
router
.get('/login', login)
.get('/register', register)
.post('/register', createUser)

module.exports = router;
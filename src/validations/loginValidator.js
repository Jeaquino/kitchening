const {body} = require('express-validator');
const {getJson} = require("../utility/jsonMethod");
const bcrypt = require('bcryptjs');
const users = getJson('users');

module.exports = [
    body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isEmail().withMessage("El valor ingresado debe tener el formato de un correo electronico").bail()
    .custom(value => {
        console.log("value:",value);        
        const user = users.find(elemento => elemento.email == value);
        return user ? true : false
    }).withMessage("El usuario no existe"),

    body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .custom((value, {req} )=> {
        console.log("password:", value);
        const user = users.find(elemento => elemento.email == req.body.email)
        console.log("user:", user);
        console.log("user-password:", user.password);
        return bcrypt.compareSync(value, user.password);
    }).withMessage("La contraseña no es correcta")
];
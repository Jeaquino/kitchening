const {body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models')
module.exports = [
    body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isEmail().withMessage("El valor ingresado debe tener el formato de un correo electronico").bail()
    .custom(value => {
        return db.User.findOne({
                where: {
                    email: value
                }
            })
            .then(user => {
                if (!user) {
                    return Promise.reject('el mail no se encuentra registrado')
                }
            })
            .catch(() => {
                return Promise.reject('el mail no se encuentra registrado')
            })
    }),

    body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .custom((value, {req}) => {
        return db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if (!bcrypt.compareSync(value, user.dataValues.password)) { //si no machea la contraseña
                    return Promise.reject('estas mal')
                }
            })
            .catch(() => {
                return Promise.reject('Contraseña incorrecta')
            })
        
    })
];
const {setJson,getJson} = require("../utility/jsonMethod");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const usersController = {
    login: (req, res) => {
        res.render('users/login', { title: 'kitchennig' });
      },
      
    processlogin: (req, res) => {
        const errores = validationResult(req);
        
        if(!errores.isEmpty()) {
          res.render("/users/login",{errores:errores.mapped(), title:"kitchennig"});
        }

        const {email} = req.body;
        const users = getJson("users");
        const user = users.find(usuario => usuario.email == email);
        
        req.session.user = user;

        if(req.body.remember) {
          res.cookie('userEmail',user,{maxAge: 1000 * 60 * 15 });
          res.cookie('rememberMe',"true", {maxAge: 1000 * 60 * 15 });
        }

        res.redirect('/');
        },
      
    register: (req, res) => {
        res.render('./users/register', { title: 'kitchennig' });
      },
    createUser: (req, res) => {
      const users = getJson("users");
      const {name,surname,email,age,date,password} = req.body;
      const id = uuidv4();
      console.log(password);
      const user = {
        name: name.trim(),
        surname:surname.trim(),
        email:email.trim(),
        age,
        date,
        password: bcrypt.hashSync(password,10)
      }
      console.log(user);
      users.push(user);
      setJson(users,"users");
      res.redirect('/users/login');
    },
}

module.exports = usersController;
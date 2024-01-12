const {setJson,getJson} = require("../utility/jsonMethod");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const usersController = {
    login: (req, res) => {
        res.render('users/login', { title: 'kitchennig' });
      },
      
    processlogin: (req, res) => {
        const {email} = req.body;
        const users = getJson("users");
        const user = users.find(usuario => usuario.email == email);
        if(user){
          req.session.user = user;
          res.cookie('userEmail',user.email,{maxAge: 1000 * 60 * 15 });
          res.cookie('rememberMe',"true", {maxAge: 1000 * 60 * 15 });
          res.redirect('/');
        }else{
          res.render("/users/login",{error:"No se encontro el usuario", title:"kitchennig"});
        }
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
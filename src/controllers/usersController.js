const {setJson,getJson} = require("../utility/jsonMethod");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const usersController = {
    login: (req, res) => {
        res.render('users/login', { title: 'kitchennig' });
      },
      logout:(req,res)=>{
        req.session.destroy();
        if (req.cookies.user) {
          res.clearCookie('user');
          res.clearCookie('remember');
        }
        res.redirect('/');
      },
    processlogin: (req, res) => {
        const errores = validationResult(req);
        
        if(!errores.isEmpty()) {
          res.render("./users/login",{errores:errores.mapped(), title:"kitchennig", usuario:req.session.user});
        }
        console.log("body:",req.body)
        const {email} = req.body;
        const users = getJson("users");
        const user = users.find(usuario => usuario.email == email);
        
        req.session.user = user;

        if(req.body.remember == "true") {
          res.cookie('user',user,{maxAge: 1000 * 60 * 15 });
          res.cookie('rememberMe',"true", {maxAge: 1000 * 60 * 15 });
        }

        res.redirect('/');
        },
      
    register: (req, res) => {
        res.render('./users/register', { title: 'kitchennig', usuario:req.session.user });
      },

    createUser: (req, res) => {
      const errores = validationResult(req);
      
      console.log("errores:", errores);
      
      if(!errores.isEmpty()){
        console.log("Ingrese en errores");
        res.render('./users/register',{errores:errores.mapped(),old:req.body,title:"registro"})
      }
      else{
      const users = getJson("users");
      const {name,surname,email,age,date,password,rol} = req.body;
      const id = uuidv4();
      const user = {
        id,
        name: name.trim(),
        surname:surname.trim(),
        email:email.trim(),
        age,
        date,
        image:req.file ? req.file.filename : "default.jpg", 
        password: bcrypt.hashSync(password,10),
        rol: rol ? rol : "user"
      }
      setJson(users,"users");
      res.redirect('./users/login');
    }
    },
    profile:(req,res)=>{
      const {id} = req.params;
      console.log("id",id);
      console.log("req.params",req.params);
      const users = getJson("users");
      const user = users.find(elemento => elemento.id == id);
      res.render('./users/updateProfile', { title: 'kitchennig', user, usuario:req.session.user });
    },
    processUpdate:(req,res)=>{
      const {id} = req.params;
      const {name,surname,email,age,date,rol} = req.body;
      const users = getJson("users");
      const usuario = users.find(elemento => elemento.id == id);
      const usuarios = users.map(element => {
        if (element.id == id) {
          return {
            id,
            name: name.trim(),
            surname:surname.trim(),
            email:email.trim(),
            age,
            date,
            image:req.file ? req.file.filename : usuario.image, 
            password: usuario.password,
            rol: rol ? rol : "user"
          }
        }
        return element
      });
      setJson(usuarios,"users");
      res.redirect(`/users/profile/${id}`);
    },
    dashboard:(req,res)=>{
      res.send(req.session.user)
    }
}

module.exports = usersController;
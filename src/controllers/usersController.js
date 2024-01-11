const {setJson,getJson} = require("../utility/jsonMethod");
const { v4: uuidv4 } = require('uuid');

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
          console.log("session:",req.session);
          res.cookie('userName',user.name);
          res.cookie('userId',user.id);
          console.log("session:",req.session);
          res.redirect('/');
        }else{
          res.render("/users/login",{error:"No se encontro el usuario", title:"kitchennig"});
        }
      },
      
    register: (req, res) => {
        res.render('/users/register', { title: 'kitchennig' });
      },
    createUser: (req, res) => {
      const users = getJson("users");
      const user = req.body;
      const id = uuidv4();
      user.id = id;
      users.push(user);
      setJson(users,"users");
      res.redirect('/users/login');
    },
}

module.exports = usersController;
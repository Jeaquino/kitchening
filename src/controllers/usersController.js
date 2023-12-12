const {setJson,getJson} = require("../utility/jsonMethod");
const { v4: uuidv4 } = require('uuid');

const usersController = {
    login: (req, res) => {
        res.render('./users/login', { title: 'kitchennig' });
      },
    register: (req, res) => {
        res.render('./users/register', { title: 'kitchennig' });
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
const usersController = {
    login: (req, res) => {
        res.render('./users/login', { title: 'kitchennig' });
      },
    register: (req, res) => {
        res.render('./users/register', { title: 'kitchennig' });
      },
}

module.exports = usersController;
const indexController = {
    home: (req, res) => {
        res.render('home', { title: 'kitchennig' });
      }
}

module.exports = indexController;
const productsController = {
    detail: (req, res) => {
        res.render('home', { title: 'kitchennig' });
    }
}

module.exports = productsController;
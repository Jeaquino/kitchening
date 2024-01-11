const {setJson,getJson} = require("../utility/jsonMethod");

const indexController = {
    home: (req, res) => {
        console.log(req.session)
        res.render('home', { title: 'kitchennig', products:getJson("products")});
      }
}

module.exports = indexController;
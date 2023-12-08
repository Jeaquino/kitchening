const {setJson,getJson} = require("../utility/jsonMethod");

const indexController = {
    home: (req, res) => {
        res.render('home', { title: 'kitchennig', products:getJson("products") });
      }
}

module.exports = indexController;
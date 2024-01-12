const {setJson,getJson} = require("../utility/jsonMethod");

const indexController = {
    home: (req, res) => {
        console.log(req.session.user);
        res.render('home', { title: 'kitchennig', products:getJson("products"), usuario:req.session.user});
      }
}

module.exports = indexController;
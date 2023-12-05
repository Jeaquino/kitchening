const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/products.json"),"utf-8")
const products = JSON.parse(json);
const indexController = {
    home: (req, res) => {
        res.render('home', { title: 'kitchennig', products });
      }
}

module.exports = indexController;
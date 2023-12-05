const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/products.json"),"utf-8")
const products = JSON.parse(json);

const example = {
    nombre:"",
    descripcion:"",
    categoria:"",
    especificaciones:{
        cpu:"Intel 7",
        hdd:"Kingstone SSD 1TB",
        ram:"16GB",
        pantalla:'19"'
    }
}

const productsController = {
    dashboard:(req, res) => {
        res.render('products/dashboard', { title: "Dashboard", products });
    },
    create:(req, res) => {
        res.render('products/createProduct', { title: "Create Product" });
    },
    detail: (req, res) => {
        const {id} = req.params;
        const product = products.find(producto => producto.id == id);
        res.render('products/detail', { title: product.nombre, product });
    },
    update: (req, res) => {
        const {id} = req.params;
        const product = products.find(producto => producto.id == id);
        res.render('products/update', { title: product.nombre, product });
    },
    delete: (req, res) => {
        const {id} = req.params;
        const product = products.find(producto => producto.id == id);
        res.render('products/da', { title: product.nombre, product });
    },
    example:(req, res) => {
        res.render('products/example', { title: 'kitchennig', product:example });
    }
}

module.exports = productsController;
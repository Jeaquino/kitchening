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
        const propiedades = ["id","nombre","imagen","sticker"];
        
        /*for ( prop in products[0]) {
            propiedades.push(prop)
        }*/
        
        console.log(propiedades);
        res.render('products/dashboard2', { title: "Dashboard", products, propiedades });
    },

    formCreate:(req, res) => {
        res.render('products/createProduct', { title: "Create Product" });
    },

    create:(req, res) => {
        const producto = req.body;
        producto.id = products[products.length-1].id + 1;
        products.push(producto);
        console.log(products);
        const json = JSON.stringify(products);
        fs.writeFileSync(path.join(__dirname,"../database/products.json"),json,'utf-8')
        res.redirect("/products/dashboard");
    },

    detail: (req, res) => {
        const {id} = req.params;
        const product = products.find(producto => producto.id == id);
        res.render('products/detail', { title: product.nombre, product });
    },

    formUpdate: (req, res) => {
        const {id} = req.params;
        const product = products.find(producto => producto.id == id);
        res.render('products/createProduct', { title: product.nombre, product });
    },
    update: (req, res) => {
        const {id} = req.params;
        const product = products.find(producto => producto.id == id);
        res.redirect("/products/dashboard");
    },
    productDelete: (req, res) => {
        const {id} = req.params;
        const product = products.find(producto => producto.id == id);
        res.redirect("/products/dashboard");
    },
    example:(req, res) => {
        res.render('products/example', { title: 'kitchennig', product:example });
    }
}

module.exports = productsController;
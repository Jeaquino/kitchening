const { log } = require("console");
const fs = require("fs");
const path = require("path");

const { v4: uuidv4 } = require('uuid');

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

const readJson = () => {
    const json = fs.readFileSync(path.join(__dirname,"../database/products.json"),"utf-8")
    const products = JSON.parse(json);
    return products;
}

const saveJson = (products) => {
    const json = JSON.stringify(products);
    fs.writeFileSync(path.join(__dirname,"../database/products.json"),json,'utf-8')
}

const productsController = {
    dashboard:(req, res) => {
        const propiedades = ["id","nombre","imagen","sticker"];
        
        /*for ( prop in products[0]) {
            propiedades.push(prop)
        }*/
        
        const products = readJson();
        res.render('products/dashboard2', { title: "Dashboard", products, propiedades });
    },

    formCreate:(req, res) => {
        res.render('products/createProduct', { title: "Create Product",product:null });
    },

    formUpdate: (req, res) => {
        const {id} = req.params;
        const products = readJson();
        const product = products.find(producto => producto.id == id);
        res.render('products/createProduct', { title: product.nombre, product });
    },

    create:(req, res) => {
        const producto = req.body;
        producto.id = uuidv4();
        const products = readJson();
        products.push(producto);
        const json = JSON.stringify(products);
        fs.writeFileSync(path.join(__dirname,"../database/products.json"),json,'utf-8')
        res.redirect("/products/dashboard");
    },

    update: (req, res) => {
        const {nombre,descripcion,imagen,sticker} = req.body;
        const {id} = req.params;
        console.log("el id de req update",id)
        const products = readJson();
        
        productsModify = products.map(producto => {
            if (producto.id == id) {
                return{
                id,
                nombre:nombre.trim(),
                descripcion,
                imagen:producto.imagen,
                sticker
                }
            }
        return producto
        })
        saveJson(productsModify);
        
        res.redirect(`/products/detail/${id}`);
    },

    detail: (req, res) => {
        const {id} = req.params;
        console.log("ID DETAIL:",id);
        const products = readJson();
        console.table(products);
        const product = products.find(producto => producto.id == id);
        console.log("producto:",product);
        res.render('products/detail', { title: product.nombre, product });
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
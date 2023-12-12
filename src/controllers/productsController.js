const {setJson,getJson} = require("../utility/jsonMethod");
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


const productsController = {

    //Renderiza la vista dashboard, se define en la variable propiedades la información que se desea mostrar de los productos

    dashboard:(req, res) => {
        const propiedades = ["id","nombre","imagen","sticker"];
        
        /* Bloque utilizado para recorrer todas las propiedades del objeto

        for ( prop in products[0]) {
            propiedades.push(prop)
        }
        
        */
        
        const products = getJson("products");
        res.render('products/dashboard2', { title: "Dashboard", products, propiedades });
    },

    formCreate:(req, res) => {
        res.render('products/createProduct', { title: "Create Product",product:null });
    },

    formUpdate: (req, res) => {
        const {id} = req.params;
        const products = getJson("products");
        const product = products.find(producto => producto.id == id);
        console.log("producto seleccionado:",product);
        res.render('products/updateProduct', { title: product.nombre, product });
    },

    create:(req, res) => {
        const producto = req.body;
        producto.id = uuidv4();
        const products = getJson("products");
        products.push(producto);
        setJson(products,"products");
        res.redirect("/products/dashboard");
    },

    update: (req, res) => {
        const {nombre,descripcion,imagen,sticker} = req.body;
        const {id} = req.params;
        const products = getJson("products");
        
        productsModify = products.map(producto => {
            if (producto.id == id) {
                return{
                id,
                nombre:nombre.trim(),
                descripcion:descripcion.trim(),
                imagen: (imagen ? imagen : producto.imagen),
                sticker
                }
            }
        return producto
        })

        setJson(productsModify,"products");
        
        res.redirect(`/products/detail/${id}`);
    },

    detail: (req, res) => {
        const {id} = req.params;
        console.log("ID DETAIL:",id);
        const products = getJson("products");
        console.table(products);
        const product = products.find(producto => producto.id == id);
        console.log("producto:",product);
        res.render('products/detail', { title: product.nombre, product });
    },
    
    productDelete: (req, res) => {
        const {id} = req.params;
        const products = getJson("products");
        const newArrayProducts = products.filter(producto => producto.id != id);
        console.log("newArrayProducts",newArrayProducts);
        setJson(newArrayProducts,"products");
        res.redirect("/products/dashboard");
    },
    
    example:(req, res) => {
        res.render('products/example', { title: 'kitchennig', product:example });
    }
}

module.exports = productsController;
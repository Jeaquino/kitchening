const products = [
    {
    id:1,
    nombre:"Producto1",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum ex libero nesciunt soluta facere.",
    imagen:"img-pdto-1.jpg",
    sticker:"img-nuevo.png"
},
{
    id:2,
    nombre:"Producto2",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum ex libero nesciunt soluta facere.",
    imagen:"img-pdto-2.jpg",
    sticker:"img-descuento.png"
},
{
    id:3,
    nombre:"Producto3",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum ex libero nesciunt soluta facere.",
    imagen:"img-pdto-3.jpg",
    sticker:"img-gratis.png"
},
{
    id:4,
    nombre:"Producto4",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum ex libero nesciunt soluta facere.",
    imagen:"img-pdto-1.jpg",
    sticker:"img-nuevo.png"
},
{
    id:5,
    nombre:"Producto5",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum ex libero nesciunt soluta facere.",
    imagen:"img-pdto-2.jpg",
    sticker:"img-descuento.png"
},
{
    id:6,
    nombre:"Producto6",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum ex libero nesciunt soluta facere.",
    imagen:"img-pdto-3.jpg",
    sticker:"img-gratis.png"
}
];

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
    detail: (req, res) => {
        res.render('products/detail', { title: 'kitchennig' });
    },
    example:(req, res) => {
        res.render('products/example', { title: 'kitchennig', product:example });
    }
}

module.exports = productsController;
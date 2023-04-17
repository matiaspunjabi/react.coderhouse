const productos = [
    {id: 1, nombre: "nueces", categoria:12 ,precio: 400, stock: 10, img: "../../img/nuez.webp"},
    {id: 2, nombre: "almendras", categoria:12 ,precio: 500, stock: 15, img: "../../img/almendra.webp"},
    {id: 3, nombre: "castañas", categoria:12 ,precio: 300, stock: 13, img: "../../img/castaña.webp"},
    {id: 4, nombre: "mani", categoria:13 ,precio: 200, stock: 8, img: "../../img/mani.webp"},
    {id: 5, nombre: "pistacho", categoria:13 ,precio: 1000, stock: 3, img: "../../img/pistacho.webp"}
]

 export const obtenerProductos = () => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(productos)
        }, 500)
    })
}

export const obtenerUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 500);
    })
}
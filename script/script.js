


/* pregunta el nombre del usuario y da la Bienvenida a la pagina */

const numeroDeIntentos = 11;


for (let index = 1; index < numeroDeIntentos; index++) {
    let nombre = prompt("¿cual es tu nombre?");
    if (isNaN(nombre) || nombre == null) {
        console.log("Bienvenido " + nombre);
        break;
    }
    else {
        console.log("no se admiten numeros o debes completar el formulario");

    }

}

/* creacion de la clase producto */
class Producto {
    constructor(id, precio, stock) {
        this.id = id.toUpperCase();
        this.precio = parseInt(precio);
        this.stock = stock;

    }
}


/* creacion de productos  */
let pantalones = new Producto("pantalones", 400, 30);
let zapatillas = new Producto("zapatillas", 300, 20);
let buzos = new Producto("buzos", 100, 10);
let remeras = new Producto("remeras", 250, 50);



const productos = [pantalones, zapatillas, buzos, remeras];
let productosSelect = [];
let total = 0;
let cantidadProductos = parseInt(prompt("cuantos productos deseas comprar ?"));


/* bucle para cargar elementos al array productos select */
for (let index = 0; index < cantidadProductos; index++) {


    let numeroIndicado = parseInt(prompt("¿que producto quieres comprar? 1-->pantalones  2-->zapatillas 3--->buzos 4--->remeras "));
    let x = productos[numeroIndicado - 1]
    productosSelect.push(x);

}


console.log(productosSelect);


/* suma del total de productos  */
for (const Producto of productosSelect) {

    total += Producto.precio;

}

/* busca un producto al cual se le desea aplica un descuento */

let buscarProducto = prompt("ESCRIBA EL PRODUCTO QUE DESE APLICAR DESCUENTO (ZAPATILLAS , BUZOS , PANTALONES , REMERAS)");

let aplicarDescuento = productos.find((productos) => productos.id === buscarProducto.toUpperCase());


if (aplicarDescuento !== undefined) {

    console.log(aplicarDescuento);
} else {
    console.log("no se encontro producto con el nombre :" + buscarProducto);
}

console.log("el total de tu compra es de : " + total);




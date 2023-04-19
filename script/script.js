
/* esta funcion para validar la edad y no ejecutar lo siguente en caso de que sea menor */
/* function validarEdad() {

    let persona = prompt("ingresa tu edad");

    if (persona >= 18) {
        console.log("Bienvenido a la pagina web");
        mostrarMenu();
        pagina2();
    } else {
        console.log("eres menor de edad no puedes ingresar a la pagina");
    }

} */

/* si es mayo de edad ejecuta la funcion mostrarMenu */

/* 
function mostrarMenu() { */

/* pregunta el nombre del usuario y da la Bienvenida a la pagina */

/*   const numeroDeIntentos = 11;


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
*/

/* pide un numero del 1 al 5 para luego ver cual es el descuento que le toca y retorna el resultado del producto restado */



/*   let entrada = parseInt(prompt("ingrese un numero del 1 al 5 para obtener un descuento"));

  while (entrada != entrada < 5 || entrada != null) {


      console.log("Ingresaste el numero " + entrada);

      if (entrada <= 5) {
          entrada = parseInt(entrada);
          break;

      }
      entrada = prompt("Debes ingresar un numero del 1 al 5");
  }


  switch (entrada) {

      case 1:

          console.log("te ganaste el producto gratis");
          break;

      case 2:
          entrada = 20;
          console.log("te ganaste un descuento del %" + entrada);
          break;
      case 3:

          entrada = 10;
          console.log("te ganaste un descuento del %" + entrada);
          break;

      case 4:
          entrada = 5;
          console.log("te ganaste un descuento del %" + entrada);
          break;

      case 5:
          entrada = 15;
          console.log("te ganaste un descuento del %" + entrada);
          break;

      default:
          break;
  }
} */

class Producto {
    constructor(id, precio, stock) {
        this.id = id;
        this.precio = parseInt(precio);
        this.stock = stock;

    }
    incrementarPrecio(incremento) {
        this.precio = this.precio + incremento;
        return this.precio;
    }
}


let pantalones = new Producto(1, 400, 30);
let zapatillas = new Producto(2, 300, 20);
let buzos = new Producto(3, 100, 10);
let remeras = new Producto(4, 250, 50);

const productos = [pantalones, zapatillas, buzos, remeras];
let productosSelect = [];
let total = 0;
let cantidadProductos = parseInt(prompt("cuantos productos deseas comprar ?"));


for (let index = 0; index < cantidadProductos; index++) {

    /* poner find  */
    let numeroindicado = parseInt(prompt("¿que producto quieres comprar? 1-->pantalones  2-->zapatillas 3--->buzos 4--->remeras "));

    let x = productos[numeroindicado - 1]
    productosSelect.push(x);
}


console.log(productos);
console.log(productosSelect);

for (const Producto of productosSelect) {

    total += Producto.precio;

}

console.log(total);



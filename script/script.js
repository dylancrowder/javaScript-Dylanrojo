
/* esta funcion para validar la edad y no ejecutar lo siguente en caso de que sea menor */
function validarEdad() {

    let persona = prompt("ingresa tu edad");

    if (persona >= 18) {
        console.log("estas adentro");
        mostrarMenu();
    } else {
        console.log("sos menor de edad");
    }
}


/* si es mayo de edad ejecuta la funcion mostrarMenu */

function mostrarMenu() {

    /* pregunta el nombre del usuario y da la Bienvenida a la pagina */

    const numeroDeIntentos = 11;


    for (let index = 1; index < numeroDeIntentos; index++) {
        let nombre = prompt("como te llamas ?");
        if (isNaN(nombre) || nombre == null) {
            console.log("Bienvenido " + nombre);
            break;
        }
        else {
            console.log("no se admiten numeros o debes completar el formulario");

        }



    }


    /* pide un numero del 1 al 5 para luego ver cual es el descuento que le toca y retorna el resultado del producto restado */



    let entrada = parseInt(prompt("ingrese un numero del 1 al 5"));

    while (entrada != entrada < 5 || entrada != null) {


        console.log("Ingresaste el numero " + entrada);

        if (entrada <= 5) {
            entrada = parseInt(entrada);
            precioProducto = parseInt(prompt("precio del producto"));
            console.log("el precio de tu producto es de " + precioProducto);
            break;

        }
        entrada = prompt("Debes ingresar un numero del 1 al 5");
    }


    resultado = 0;


    switch (entrada) {

        case 1:

            console.log("te ganaste el producto gratis");
            break;

        case 2:

            resultado = precioProducto * (20 / 100);
            resultado = precioProducto - resultado;
            console.log("te ganaste un bonus de 20% y el precio final es de " + resultado);
            break;

        case 3:

            resultado = precioProducto * (5 / 100);
            resultado = precioProducto - resultado;
            console.log("te ganaste un bonus de 5% y el precio final es de " + resultado);
            break;

        case 4:
            resultado = precioProducto * (15 / 100);
            resultado = precioProducto - resultado;
            console.log("te ganaste un bonus de 15% y el precio final es de " + resultado);
            break;

        case 5:
            resultado = precioProducto * (50 / 100);
            resultado = precioProducto - resultado;
            console.log("te ganaste un bonus de 50% y el precio final es de " + resultado);
            break;

        default:
            break;
    }

}

validarEdad();
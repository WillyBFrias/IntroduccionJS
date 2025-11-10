// "use strict" // Correr Js en modo estricto.
// Metodos de objetos 

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze(producto); // Impide que el objeto no se pueda modificar(No se puede agregar o eliminar un valor).
Object.seal(producto); // Impide que el objeto no se pueda modificar(No se puede agregar o eliminar un valor o propiedad), pero si permite modificar los valores ya existentes.

// producto.imagen = 'imagen.jpg';
producto.precio = 'NUEVO PRECIO' // Ejemplo de modificacion en el metodo seal, modifico el valor de precio.

// console.log(Object.isFrozen(producto)); // Valida si tienes o no el metodo de freeze activado.
console.log(Object.isSealed(producto)); // Valida si tienes o no el metodo de seal activado.

console.log(producto);
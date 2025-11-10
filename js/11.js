//Desestructuración del objeto

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Forma anterior de hacerlo
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Desestructuración - Mas nuevo y se usa mas

const {precio , nombreProducto } = producto; // Se puede llamar todas las propiedades en una sola linea de codigo en vez de hacerlo en cada una.
//const { nombreProducto } = producto;


console.log(precio);
console.log(nombreProducto);
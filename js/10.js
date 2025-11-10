// Objetos 


// Forma tradicionar de nombrar cada apartado de un producto por separado, sin usar un objeto
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

// Uso de objeto, utilizando los demas valores para llamar cada funcion en uno solo, en este caso llamado producto.
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// console.log(producto.precio) // Utilizando la sintaxis de punto para poder llamar la propiedad solicitada.
// console.log(producto.nombreProducto) 
// console.log(producto.disponible) 
// console.log(producto["precio"]) // Otra forma de llamar la propiedad solicitada en este caso precio.

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponible;

console.log(producto);
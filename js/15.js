// Array Methods

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 20 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// forEach
meses.forEach(function(mes){
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
}); 

// Incluedes 
let resultado = meses.includes('Marzo'); // Funciona en un arreglo que no contegan mucha informacion solo la necesaria para comprobar si existe o no un valor a buscar.
console.log(resultado);

// Some ideal para arreglo de objetos
// resultado = carrito.some(function(producto){
//     return producto.nombre === 'Celular'  // Funciona cuando el arreglo tiene objetos y valores mas especificos y queremos comprobar de igual forma si existe o no el valor.
// });

resultado = carrito.some(producto => producto.nombre === 'Celular Pro'); // Se le conoce esta funcion con el nombre de Arrow Function.

// Reduce
// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio  // Esta funcion sirve para mostrar el total apagar de todos los productos o de algun valor en especifico a buscar.
// }, 0);                               // Suma todos los productos.

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // Otra forma de escribir el metodo reduce usando la funcion Arrow Function.

// Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400   //Esta funcion sirve parra filtrar la propiedad a buscar. 
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});

console.log(resultado);
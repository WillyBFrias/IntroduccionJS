// forEach y map

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

// ForEach - Se imprime solo una vez cada iteracion si hay 3, imprimira una vez mostrando el numero de iteraciones que tenga 

// carrito.forEach(function(producto) {
//     console.log(producto.nombre);
// });

// Sirve para iterar o mostrar en consola 
carrito.forEach( producto => console.log(producto.nombre)); 

// map -  Crea un nuevo arreglo con la funcion establecida que se deasea buscar y asignarlo en una nueva variable en este caso arreglo2.
const arreglo2 = carrito.map( producto => `${producto.nombre} = ${producto.precio}`); 


console.log(arreglo2);
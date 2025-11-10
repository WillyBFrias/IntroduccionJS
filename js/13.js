// Unir dos objetos distintos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas }; // Metodo llamado spread Operator, cual une los dos objetos en uno solo sin modificarlos.

console.log(producto);
console.log(nuevoProducto);
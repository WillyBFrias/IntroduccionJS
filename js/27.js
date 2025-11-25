// POO

/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente = new Cliente('Willy' , 'frias');

// Prototype - Crear funciones que solo se utilizan en un objecto en especifico.
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

console.log(cliente)
console.log(cliente.formatearCliente() );


function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;

    if(disponible > 0  ) {
        this.disponible = true;
    } else {
        this.disponible = false;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, 2);
const producto3 = new Producto('Laptop', 300, 3);
const producto4 = new Producto('Switch', 3000, 0);
const producto5 = new Producto('Audifonos', 1500, 5);

// Prototype - Crear funciones que solo se utilizan en un objecto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio} y se encuentra disponible: ${this.disponible}`;
}

function formatearProducto() {
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );
console.log(producto4.formatearProducto() );
console.log(producto5.formatearProducto() );

//console.log( formatearProducto(producto2) );



// POO

/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
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

console.log(producto2)
console.log(producto3)
console.log(producto4)
console.log(producto5)
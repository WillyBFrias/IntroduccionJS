// Clases

// Las clases siempre tiene que estar en mayusculas la primera letra.
class Producto { 
    constructor(nombre, precio) { //Un constructor es lo mismo que una función solo que no hay necesidad de escribir function 
        this.nombre = nombre;     //A fuerzas lleva la palabra constructor al ser una palabra reservada
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $${this.precio}` ;
    }
    
    
    formatearPrecio() {
       return `El Total a pagar con  IVA seria: $${this.precio * 1.16} `;
    }

    // obtenerPrecio() {
    //     console.log(this.precio); 
    // }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);


// Herencia 

class Libro extends Producto { // extends sirve para poder hereda el constructor, como otros metodos. 
    constructor(nombre,  precio, isbn ) {
        super(nombre, precio); // super funciona para traer los metodos del padre al hijo, no se puede pasar mas variables o metodos si no estan almacenados en el padre.
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es: ${this.isbn}` ;
    }

    // obtenerPrecio() {
    //     super.obtenerPrecio();
    //     console.log('Y si hay en existencia');
    // }
}


const libro = new Libro('JavaScript la Revlución', 120, '910313981389139');
console.log(libro.formatearProducto() );
//console.log(libro.obtenerPrecio() );
console.log(producto2.formatearProducto() );
 console.log(producto2.formatearPrecio() );
//console.log(producto2.obtenerPrecio() );
console.log(producto3.formatearProducto() );
console.log(producto3.formatearPrecio() );



// For Loop

// for( let i = 0; i < 10; i++ ) {
//     console.log(i);
// }

// for( let i = 1; i <= 100; i++ ) { // Ejemplo para poder obtener los numeros pares o impares del 1 al 100.
//     if( i % 2 === 0 ) {
//         console.log(`El Número ${i} es PAR`);
//     } else {
//         console.log(`El Número ${i} es IMPAR`);
//     }
// }


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

for( let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre );
}

// White Loop - Se evalua primero la condicion y si cumple con esta se procede a realizar  dichas condiciones.

//let i = 20; // Indice

//while(i < 10) { // Condición 

    // Ejemplo de numeros par o impar con el uso de while.
    // if (i % 2 === 0) { 
    //     console.log(`El número ${i} es PAR `);
    // } else {
    //     console.log(`El número ${i} es IMPAR `);
    // }

    // Ejemplo con el carrito de compras 
    // console.log(carrito[i].nombre);

    // console.log('Desde el while loop'); // Como se ve en el ejemplo no se puede visualizar nada ya que el numero 20 es mayor que 10, por lo tanto la condicion no es verdadera.

    // i++; // Incremento
//}


// Do While Loop - Se imprime tan siquiera una vez, antes que la condicion se cumpla.

let i = 100;

do {
    console.log(i);

    i++;
} while(i < 10);
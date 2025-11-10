// Arreglos o Arrays

const numeros = [10,20,30,40,50];

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo'); // Otro ejemplo de arreglo con un constructor.


// const arreglo = ["Hola",10,true,"si",null, {nombre: "Willy" , trabajo: "Programador"}, [1,2,3] ];

// console.log(arreglo);
// console.table(arreglo);

// Acceder a los valores de un arreglo
// console.log(numeros[0]); //  El orden de las iteraciones siempre tomara el 0 como el primer numero de un arreglo.
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[200]); // Como no hay algun valor con el numero 200 dentro del arreglo lo tomaria como un dato indefinido.

// Conocer la extension de un arreglo
// console.log(meses.length);

// Iterador 
// numeros.forEach( function(numeros){ // Este apartado o esta propiedad se le conoce como iterador.
//     console.log(numeros);
// });


// Metodos para los Arreglos. 
numeros[5] = 60; // Una forma de agregar otro arreglo es insertando en el siguiente iteracion en este caso el numero 5.
numeros.push(70,80,90); //  Agrega mas valores al final del arreglo.
numeros.unshift(-10,-20,-30); // Agrega o modifica valores al principio del arreglo.


console.log(numeros);
console.table(numeros); // Una forma para imprimir mas ordenada y en una tabla lo succesion de numeros de un arreglo.


// meses.pop(); // Elimina el ultimo valor del arreglo.
// meses.shift(); // Elimina el primer valor del arreglo.
//meses.splice(2,1); // Es una propiedad que sirve para eliminar un valor o elemento a seleccion tomando en cuenta que el primer valorr se debe donde esta posicionado y el segundo cuantos elementos o valores desea eliminar desde ese valor.

console.log(meses);
console.table(meses);

// Rest Operator o Spread Operartor

const nuevoArreglo = [...meses,'Junio','Julio','Agosto']; //  Con esa nueva funcion se le puede agregar mas valores sin modificar el original, se agregan al final.
// Funciona como la propiedad push.
console.log(nuevoArreglo);
console.table(nuevoArreglo);

const nuevoArreglo1 = ['Septiembre','Octubre','Noviembre','Diciembre',...nuevoArreglo]; //  Con esa nueva funcion se le puede agregar mas valores sin modificar el original, se agregan al principio.
// Funciona como la propiedad de unshift
console.log(nuevoArreglo1);
console.table(nuevoArreglo1);
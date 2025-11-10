// Funciones de JS

// Declaracion de Funcion

function sumar () {
    console.log(10 + 10);
}

sumar();

// Expresion de la Funcion 
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE
(function() {
    console.log('Esto es una función'); //IIFE sirve para que no se pueda llamar o chocar con otra variable , o que no se pueda llamar desde otra parte.
})();

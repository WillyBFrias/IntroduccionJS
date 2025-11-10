// Diferencia de un metodo y una funcion

const numero1 = 20;
const numero2 = "20";

// parseInt() es una función que convierte una cadena a un entero, analizando la cadena hasta que encuentra un carácter no numérico 
// y devolviendo el número entero que encontró al principio. 
// Toma dos argumentos: la cadena a analizar y una base numérica (opcional). Si la cadena no comienza con un número, devuelve NaN (Not a Number). 


//El método .toString() convierte un valor a una cadena de texto. Funciona automáticamente cuando un objeto se usa en un contexto de cadena, como imprimirlo. 
// Por defecto, para objetos, devuelve una cadena como [objecttype]. Sin embargo, los desarrolladores a menudo sobrescriben este método para proporcionar 
// una representación de texto más útil y descriptiva del objeto, como su nombre, color, etc., en lugar de la información genérica predeterminada. 


console.log( parseInt(numero2) ); // parseInt() es una funcion
console.log( numero1.toString() ); // .toString() es un metodo
// Strings o Cadenas de Texto

//const producto = "Monitor de 20 pulgadas"; //La forma mas usada de la constante
const tweet = "Monitor de 27 pulgadas\""; //Otra forma de describir pulgadas mediante \".
const producto1 = "Monitor de 27 HD\""; //Otra forma de describir pulgadas mediante \".
const email = "correo@correo.com"; //Otra forma de describir pulgadas mediante \".
//const producto2 = String('Monitor de 30 pulgadas'); // Otra manera de mostrar la variable de const
//const producto3 = new String('Monitor de 50 pulgadas'); // Otra manera de mostrar la variable de const, mas descriptiva.

// length es para la extension 
//console.log(producto)
console.log(tweet.length)// El metodo .length es un metodo exclusivo de los strings, que funciona para decirnos cuantos numeros de letras son.
console.log(producto1)
//console.log(producto2)
//console.log(typeof producto3) // typeof -- Funciona para saber que tipo variable(Sea string, object).

// IndexOf (retorna una posición) para encontrar un elemento
console.log(tweet.indexOf('pulgadas')); // Se mostrara en que numero se encuentrar la palabra en  busquedad en este caso desde la 14.
console.log(producto1.indexOf('Tablet')); // se arroja un valor negativo si no se encuentra, devuelve -1
console.log(email.indexOf('@'));


// Includes (retorna true o false)
console.log(tweet.includes('pulgadas')); // Arrojara true si existe la palabra buscada.
console.log(producto1.includes('Tablet')); // Arrojara false si no encuentrar la palabra buscada.
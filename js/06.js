// objeto Math

let resultado;

resultado = Math.PI; // 3.1415----- el valor de Pi
resultado = Math.round(2.2); // round redondean de 2.5 hacia arriba, pero si es menor 2.4 no se redondea.
resultado = Math.ceil(2.2); // ceil siempre se redondea hacia arriba.
resultado = Math.floor(2.2); // floor siempre se redondea hacia abajo.
resultado = Math.sqrt(144); // sqrt la funcion sirve para obtener la raiz cuadrada.
resultado = Math.abs(-200); // abs la funcion sirve para cambiar el valor de negativo a positivo.
resultado = Math.min(1, 3, 5, 7, 10); // min la funcion sirve para dar el valor minimo de la succesion.
resultado = Math.max(1, 3, 5, 7, 10); // max la funcion sirve para dar el valor maximo de la succesion.
resultado = Math.random(); // random arroja un numero aleatorio.
resultado = Math.floor( Math.random() * 30);

console.log(resultado);
// Funciones con parametros y argumentos.

function sumar (numero1 = 0, numero2 = 0) { // numero 1, 2 son parametros.
    console.log(numero1 + numero2);
}

sumar(10, 10); // Argumentos  o los valores reales.
sumar(2, 5); 
sumar(7, 63); 
sumar(20, 20); 
sumar(1); 
sumar(); 


const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 20);
sumar2(25, 25);
sumar2(50, 20);
sumar2(55, 15);
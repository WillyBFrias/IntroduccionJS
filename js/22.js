// Estructuras de control

// const puntaje = 100;

// if(puntaje === 1000) { // En Js tiene una triple verificacion "===", lo cual debe de cumplir correctamente el valor a comparar.
//     console.log('Si el puntaje es 1000');
// } else { // En Js tiene otra verificacion si es distinto al valor a comparar, "!==".
//     console.log('No es igual');
// }


// const efectivo = 1000;
// const carrito = 800;

// if( efectivo > carrito ) {
//     console.log('El usuario puede pagar');
// } else {
//     console.log('Fondos insuficientes');
// }

const rol = 'VISITANTE';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') { // else if debe de ir en medio de un if y de un else.
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso');
}
// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve('Usuario Autenticado'); // EL Promise se cumple
    } else {
        reject('No se puede iniciar sesión'); // El Promise no se cumple
    }
});

usuarioAutenticado // Sin usar Arrow Function
    // .then( function(resultado) { // Este es el ultimo paso para poder observa correctamente si puedo o no entrar el usuarion sin mostrar alguno de los estados de promises
    //     console.log(resultado);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // })

    //Usando Arrow Function
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

// En los Promises existen 3 valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio 
// Rejected: Se ha rechazado o no se pudo cumplir
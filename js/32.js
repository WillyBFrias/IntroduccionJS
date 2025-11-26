// Async / await

function descargarNuevosClientes() {
    return new Promise( resolver => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolver('Los clientes fueron Descargados');
        }, 5000);

    });
}

function descargarUltimosPedidos() {
    return new Promise( resolver => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolver('Los pedidos  fueron Descargados');
        }, 5000);

    });
}

async function app() {
    try{
        // const clientes = await descargarNuevosClientes();
        // const pedidos =  await descargarUltimosPedidos();
    //  mostrarClientes(resultado); // Este codigo no se mostrara hasta que resultado se alla completado primero.
    //  console.log('Este código si se bloquea') // Un ejemplo donde si se podria bloquear la descarga
        // console.log(clientes);
        // console.log(pedidos);

        // Ejemplo para una prueba tecnica sobre como optimizar dos funciones de un async que se realicen al mismo tiempo con un solo await
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

//console.log('Este código no se bloquea') // Un ejemplo donde no se podria bloquear la descarga 


// setTimeout funciona para mostrar un mensaje en cierto tiempo establecido y solo lo realiza una vez.
// setTimeout( function() {
//     console.log('set timeout...')
// }, 1000); // 1000 = 1 segundo

// setInterval funciona similar al setTimeout pero con intervalos establecidos y se repite en el mismo tiempo ya marcado. 
// setInterval( function() {
//     console.log('set timeout...')
// }, 3000); // 3000 = 3 segundos
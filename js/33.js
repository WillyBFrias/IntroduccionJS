// Fetch API

async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    // Ejemplo sin usar el Async / Await
    // fetch(archivo)
    //     .then( resultado => resultado.json()) 
    //     .then( datos => {
    //         //console.log(datos.empleados);

    //         const { empleados } = datos;
    //         //console.log(empleados);

    //         // Ejemplo usando forEach
    //         // empleados.forEach( empleado => {
    //         //     console.log(empleado);
    //         //     console.log(empleado.id);
    //         //     console.log(empleado.nombre);
    //         //     console.log(empleado.puesto);

    //         //     document.querySelector('.contenido').textContent = empleado.nombre;
    //         // });
    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();

// Si en el navegador aparece un numero con terminacion 200, significa que todo esta correcto en orden y forma.
// Pero si aparece con un error 404 es que no ha encontrado el archivo a buscar o no encuentra nada.
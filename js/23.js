// Switch

const metodoPago = 'bitcoin';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    case 'bitcoin':
        console.log('El usuario pago con bitcoin, revisaremos si tiene los fondos primero');
        break;
    default: // En el caso de usar un switch tiene como obligacion usar un default despues de un case.
        console.log('Aun no has pagado');
        break;
}
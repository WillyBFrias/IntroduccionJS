// Notification API 

const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/chambas.jpg',
        body: 'Código con willy, los mejores tutos'
    })
}
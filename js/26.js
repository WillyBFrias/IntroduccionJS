// This

// window.nombre - ya que hace referencia al nombre global si el caso de usar un arrow function 

const reservacion = {
    nombre: 'Guillermo',
    apellido: 'Frias',
    total: 5000,
    pagado: false,
    informacion: function() { // el function hace referencia a las propiedades que estan dentro del const.
        console.log(`EL cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'David',
    apellido: 'Farias',
    total: 5000,
    pagado: false,
    informacion: function() { 
        console.log(`EL cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();
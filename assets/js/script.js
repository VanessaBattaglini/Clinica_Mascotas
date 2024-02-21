import { Propietario, Animal, Mascota } from '../modulos/propierario.js'


function datosAgregados() {
    let nombre = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    if (tipo == 'perro') {
        let perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad )
    }
    else if (tipo == 'gato') {
        let gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad )
    }
    else {
        let conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad )
    }
    let consultaMascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad )
    console.log(consultaMascota)
    mostrarDatosMascotas(consultaMascota);

// Para limpiar  los input
    document.getElementById('propietario').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('enfermedad').value = '';
};

let formulario = document.getElementById('formulario');

function mostrarDatosMascotas(pet) {
    let resultado = document.getElementById('resultado');
    let li = document.createElement('li');
    li.style.backgroundColor = 'green';
    li.style.color = 'white';
    li.style.fontWeight = 'bold'; 
    li.style.marginBottom = '10px'; 
    resultado.appendChild(li);
    li.innerHTML = pet.mostrarPropietarioMascota()

} 
formulario.addEventListener('submit', (e) => {
    e.preventDefault(),
        
        datosAgregados() 
    
});
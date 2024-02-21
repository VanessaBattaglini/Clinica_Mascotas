class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietario() {
        return `Tu nombre es: ${this.nombre}, posees la dirección: 
        ${this.direccion}, y tu teléfono es: ${this.telefono}`
    };
};

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo
    };
    get tipo() {
        return this._tipo 
    }
};

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this.enfermedad = enfermedad
    };
    mostrarPropietarioMascota() {
        return `Tu nombre es: ${this.nombre}, posees la dirección: 
        ${this.direccion}, y tu teléfono es: ${this.telefono}, 
        el nombre de tu mascota es: ${this.nombreMascota}, 
        el motivo de tu visita fue por: ${this.enfermedad}`
    };
    get nombreMascota() {
        return this._nombreMascota
    };
    set nombreMascota(nombreMascota) {
        if (nombreMascota == "") {
            throw new Error('El nombre no puede ser vacío')
        } else {
            this.nombreMascota = nombreMascota
        }
        this.nombreMascota = nombreMascota
    };
};
let mascota1 = new Mascota('Felipe', 'Parque Norte', '9789789098', 'Perro', 'Apolo', 'Paracitos');
// console.log(mascota1.nombreMascota)
// console.log(mascota1);
// // console.log(mascota1.nombreMascota = "")
// console.log(motrarPropietarioMascota())


export { Propietario, Animal, Mascota}

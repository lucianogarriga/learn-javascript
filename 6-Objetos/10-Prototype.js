//Si queremos agregar propiedades nuevas para todos los objetos que hemos creado
//Es decir, agregarla al Padre para que los Hijos tambien la posean => PROTOTYPE

function Persona(paramNombre,paramApellido,paramEmail){
    this.nombre = paramNombre;
    this.apellido = paramApellido;
    this.email = paramEmail;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Agregar la propiedad 'tel' a todos los OBJETOS DE TIPO PERSONA que vamos a crear
//1- Usamos la funcion constructor (Persona)
//2- Luego la propiedad Prototype y luego agregamos la propiedad con un valor default

Persona.prototype.tel = '123456'

let hijo = new Persona('Eric', 'Funes', 'efunes@mail.com');
let madre = new Persona('Sofia', 'Gomez', 'sgomez@gmail.com');

madre.tel = '33664422';

console.log(madre.tel);
console.log(hijo.tel);
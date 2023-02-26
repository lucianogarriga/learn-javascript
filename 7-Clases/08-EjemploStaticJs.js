//     EJEMPLO STATIC EN JAVASCRIPT

class Persona {

    static contadorPersona = 0;//Atributo de la clase

    //Para declarar una var Static y que no sea modificable
    //Debemos crear un metodo estatico que solo nos permitira leer los datos que devuelve
    //Pero no podremos modificar nada. 

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre,apellido){ 
        this._nombre = nombre;
        this._apellido = apellido;
        if  (Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;//Valor unico    
        } else {
            console.log('Se ha alcanzado el maximo de personas');
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido
    }
    toString(){
        return this.nombreCompleto();
    } 
    static saludar(){
        console.log('Saludos desde metodo Static');
    } 
    static saludarParams(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona { 
    constructor(nombre, apellido, departamento){  
        super(nombre, apellido); 
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
let persona2 = new Persona('Eric', 'Gomez');
let empleado1 = new Empleado('Carlos', 'Rodriguez', 'Sistemas');

console.log(persona1.toString());//1 Juan Perez
console.log(persona2.nombreCompleto());//2 Eric Gomez
console.log(empleado1.toString());//3 Carlos Rodriguez, Sistemas

console.log(Persona.contadorPersona);//3

//En los metodos GET y SET no debemos senalarlos con ()
console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Manuel', 'Falla');
let persona4 = new Persona('Ricardo', 'Dominguez');
console.log(persona4.toString());
let persona5 = new Persona('Gabriel', 'Quinteros');
console.log(persona5.toString());//undefined Gabriel Quinteros
console.log(Persona.contadorPersona);
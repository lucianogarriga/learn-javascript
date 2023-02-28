
class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        //Utilizamos nuestro atributo estatico contadorPersonas
        this._idPersona = ++Persona.contadorPersonas;
        //aplicarlo tambien para Empleado y Cliente
    }

    get idPersona(){
        return this.idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return 'ID: '+ this._idPersona + '; ' + this._nombre + ' ' + this._apellido + ', edad: ' + this._edad;
        /* Con TEMPLATE STRING - tambien es una manera recomendada
        return `
            ${this._idPersona}
            ${this._nombre}
            ${this._apellido}
            ${this._edad}
        `
        */
    }
}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        //Sobrecarga/Sobrescritura y Polimorfismo
        return super.toString()  + ', sueldo: '  + this._sueldo +  ', ID Empleado: ' + this._idEmpleado ;
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() +  ', ID Cliente: ' + this._idCliente  +  ', Date: ' + this._fechaRegistro ;
    }
}

//Prueba clase Persona

let persona1 = new Persona('Luciano', 'Garriga', 28);
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 34);
console.log(persona2.toString());

//Prueba clase Empleado

let empleado1 = new Empleado('Eric', 'Gomez', 26, 55000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Maria', 'Perez', 35, 12000);
console.log(empleado2.toString());

//Prueba clase Cliente

let cliente1 = new Cliente('Miguel', 'Cervantes', 45, new Date());
console.log(cliente1.toString());
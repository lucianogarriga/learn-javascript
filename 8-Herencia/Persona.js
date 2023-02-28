
class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        //Utilizamos nuestro atributo estatico contadorPersonas
        this._idPersona = ++Persona.contadorPersona;
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
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ', edad: ' + this._edad;
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

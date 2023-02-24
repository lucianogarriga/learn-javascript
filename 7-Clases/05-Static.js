//      STATIC

class Persona {
    constructor(nombre,apellido){ 
        this._nombre = nombre;
        this._apellido = apellido;
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
        return this._nombre + ' ' + this._apellido
    }
    toString(){
        return this.nombreCompleto();
    }
    //Colocamos la palabra 'static'
    //Asi se asocia con la CLASE pero NO con los OBJETOS
    static saludar(){
        console.log('Saludos desde metodo Static');
    }
    //Pero si se puede si llamamos un objeto por parametros
    static saludarParams(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

let persona1 = new Persona('Juan', 'Perez');

//console.log(persona1.saludar());
/*
    Llamamos el metodo STATIC del objeto persona1
    El objeto persona 1 NO puede ejecutar los Metodos ESTATICOS
    No podemos utilizar el metodo desde el objeto, sino desde la clase
*/

Persona.saludar();
Persona.saludarParams(persona1);//Juan Perez

//Los resultados de los metodos estaticos solo se pueden ver por Consola
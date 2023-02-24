//      HERENCIA

// CLASE PADRE
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
    //Sobreescribir metodo heredado de la clase Object.prototype.toString()
    toString(){
        //reutilizaremos el codigo del metodo nombreCompleto()
        return this.nombreCompleto();
    }
}

//  CLASE HIJA  
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
    //Sobreescritura
    //Si volvemos a escribir un metodo del padre, implica que vamos a sobreescribirla
    nombreCompleto(){
       // return this._nombre + ' ' + this._apellido + ', ' + this._departamento;
        return super.nombreCompleto() + ', ' + this._departamento;
       //super = p/ acceder a metodos y atributos definidos en la clase PADRE
    }
}

let persona1 = new Persona('Juan', 'Perez');
let empleado1 = new Empleado('Pedro', 'Gomez', 'Legales');
//Se debe llamar al constructor del Padre con la palabra SUPER
console.log(empleado1);
//Empleado {_nombre: 'Pedro', _apellido: 'Gomez', _departamento: 'Legales'} 

//Tambien podemos acceder a los metodos definidos en la clase PADRE
console.log(empleado1.nombreCompleto());


//Sobreescritura del metodo toString() heredado por el padre de la clase Object
console.log(empleado1.toString());// Pedro Gomez, Legales
//De esta manera vemos que se ha mandado a llamar el metodo de la clase HIJA
//A ESTO SE LO CONOCE COMO POLIMORFISMO
//De esta otra manera, llamamos el metodo del PADRE
console.log(persona1.toString());//Juan Perez
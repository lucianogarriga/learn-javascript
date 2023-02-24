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
}

//  CLASE HIJA  
//Le indicamos que hereda de otra clase con la palabra 'extends'
class Empleado extends Persona {
    //En el constructor se debe pasar por parametros los del Padre
    constructor(nombre, apellido, departamento){  
        super(nombre, apellido);//llamar al constructor del Padre
        //una vez inicializada la clase padre, terminamos de inicializar el atributo del hijo
        this._departamento = departamento;
        //utilizamos el _ porque despues utilizamos GET y SET para definir el atributo
        //como los metodos get y set se llamaran departamento,
        //necesitamos colocar el _ antes del nombre del atributo
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);// Persona {_nombre: 'Juan', _apellido: 'Perez'}

let empleado1 = new Empleado('Pedro', 'Gomez', 'Legales');
//Se debe llamar al constructor del Padre con la palabra SUPER
console.log(empleado1);
//Empleado {_nombre: 'Pedro', _apellido: 'Gomez', _departamento: 'Legales'}
console.log(empleado1.nombre);//Llamamos el metodo 'get nombre' del Padre

//Tambien podemos acceder a los metodos definidos en la clase PADRE
console.log(empleado1.nombreCompleto());
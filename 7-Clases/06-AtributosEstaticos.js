//     ATRIBUTOS ESTATICOS

class Persona {

    //Podemos inicializar la variable con 'static' y le asignamos un valor
    //Este atributo pertenece a la Clase, y a ningun objeto
    static contadorObjetosPersona = 0;


    constructor(nombre,apellido){ 
        this._nombre = nombre;
        this._apellido = apellido;
        //Podemos incrementar el valor de la variable cuando se llama al constructor y se crea un objeto
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa el contador: ' + Persona.contadorObjetosPersona);
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

console.log(Persona.contadorObjetosPersona);

let empleado1 = new Empleado('Pedro', 'Gomez', 'Legales');

Persona.saludarParams(persona1);//Juan Perez

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//Las CLASES HIJAS tambien heredan los ATRIBUTOS ESTATICOS
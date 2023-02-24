//     ATRIBUTOS ESTATICOS VS NO ESTATICOS

class Persona {
    static contadorObjetosPersona = 0;//Atributo de la clase

    email = 'Valor default email';//Atributo de los objetos

    constructor(nombre,apellido){ 
        this._nombre = nombre;
        this._apellido = apellido;
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
let empleado1 = new Empleado('Pedro', 'Gomez', 'Legales');


console.log(persona1.email);//Valor default email

console.log(Persona.email);//Undefined

// INSTANCEOF

class Empleado{

    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    //Se recomienda 1ro preguntar por la clase de menor jerarquia (hija)
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente'); 
    } 
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
    else if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }
}

let gerente1 = new Gerente('Carlos', 15000, 'Sistemas');
let empleado1 = new Empleado('Hector', 10000);

determinarTipo(gerente1);//Gerente: Empleado: nombre: Carlos, sueldo: 15000, departamento: Sistemas
determinarTipo(empleado1);//Empleado: nombre: Hector, sueldo: 10000 
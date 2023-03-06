// POLIMORFISMO

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

/*
    Definimos un Metodo independiente - Fuera de las 2 Clases 
    Polimorfismo (multiples formas) 
    Con 1 sola linea de codigo se puede llamar al metodo del padre o del hijo
*/
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

let gerente1 = new Gerente('Carlos', 15000, 'Sistemas');
let empleado1 = new Empleado('Hector', 10000);

imprimir(empleado1);//Empleado: nombre: Hector, sueldo: 10000 
imprimir(gerente1);//Gerente: Empleado: nombre: Carlos, sueldo: 15000, departamento: Sistemas
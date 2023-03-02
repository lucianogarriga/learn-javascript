// SOBREESCRITURA

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
        //debemos hacer la llamada al constructor del padre (super)
        //de esta manera completamos el objeto del padre
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        //P/ sobreescritura del metodo en el padre
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

let gerente1 = new Gerente('Carlos', 15000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

let empleado1 = new Empleado('Hector', 10000);
console.log(empleado1.obtenerDetalles());
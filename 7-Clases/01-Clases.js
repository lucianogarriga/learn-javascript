// CLASES EN JS

class Persona {
    constructor(nombre,apellido){
        //apellido = es el nombre del parametro
        //this.apellido = nombre del atributo de la clase
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);//Persona {nombre: 'Juan', apellido: 'Perez'}

let persona2 = new Persona('Pedro', 'Gomez');
console.log(persona2);//Persona {nombre: 'Pedro', apellido: 'Gomez'}

//Son 2 objetos que contienen diferente informacion,
//pero que fueron creados en virtud de la misma plantilla
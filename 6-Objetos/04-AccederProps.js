//ACCEDER A PROPIEDADES DE LOS OBJETOS

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    mail: 'jperez@mail.com',
    edad: 28,
    //Es similar cuando trabajamos con Funciones de Tipo Expresion
    //De esta manera la Propiedad contiene una REFERENCIA A UN METODO/FUNCION
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//      1) La mas conocida y utilizada
persona.nombre;

//      2) Tambien podemos acceder como si fuera un ARRAY
//Pero en lugar de colocar el indice, colocamos el nombre de la prop como si fuera un 'string'
console.log(persona['mail']);
console.log(persona['edad']);

//De esta manera tambien nos permite acceder a las props mediante un CICLO FOR-IN
//      3) CICLO FOR-IN

for(nombreProp in persona){
    console.log(nombreProp);
    //Para acceder a los valores
    console.log(persona[nombreProp]); 
}
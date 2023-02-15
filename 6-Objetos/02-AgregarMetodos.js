//Agregar un metodo a un objeto es como agregar otra propiedad

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

console.log(persona.nombreCompleto());
//Para acceder a los atributos del propio objeto, se hace a traves del operador => THIS
//THIS a su vez es una variable que apunta al objeto que se esta ejecutando
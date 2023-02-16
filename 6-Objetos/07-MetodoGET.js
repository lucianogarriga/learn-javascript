//          METODO GET 

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//Son mejores practicas para acceder y modificar los valores de las propiedades de los objetos

//Como accedemos a la funcion que apunta la propiedad 'nombreCompleto'?

//1) De la manera convencional, accediendo a la variable punto seguido de la propiedad
//Al ser un metodo/funcion debemos llamarla con los ()

console.log(persona.nombreCompleto());//Juan Perez

//2) Concepto GET => permite obtener los valores de las props
//De esta manera se accede como el valor de una prop mas, sin importar si es o no una funcion
//Por ende, no es necesario llamarla con los ( )
//Colocamos la palabra 'get' antes de la propiedad, y eliminamos la palabra function()

let persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona2.nombreCompleto);//Juan Perez

//De esta manera, 'nombreCompleto' no solo es una propiedad, sino que tambien es un METODO GET
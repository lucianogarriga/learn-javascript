//El metodo Call permite llamar un metodo de un objeto desde otro objeto

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Gomez',
}

//con el metodo Call podremos usar el metodo definido en el primer objeto

console.log(persona1.nombreCompleto());

//El metodo call recibe un parametro, y es el objeto donde tomaremos los datos
console.log(persona1.nombreCompleto.call(persona2));
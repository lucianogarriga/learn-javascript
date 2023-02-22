let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    //titulo y tel son parametros del metodo, no son propiedades del objeto
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Gomez',
}

//Despues del objeto, pasamos la informacion de los parametros
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '123456'));

console.log(persona1.nombreCompleto('Ab', '445566'));
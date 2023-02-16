//AGREGAR Y ELIMINAR PROPIEDADES DE OBJETOS

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    mail: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

//      PARA AGREGAR/MODIFICAR PROPIEDADES

//Accediendo con el 'punto' indicando el nombre del objeto primero
persona.tel = '351123344';
//Para modificar se puede acceder de la misma manera
persona.tel = '112233445';
console.log(persona.tel);

//      PARA ELIMINAR PROPIEADES 

//Se utiliza la palabra reservada 'delete'

delete persona.edad;

console.log(persona.edad);//undefined

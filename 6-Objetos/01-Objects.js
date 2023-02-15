/* Diferencias entre Objetos y Valores de Tipos Primitivos
    TIPOS PRIMITIVOS NO tienen propiedades ni metodos. Solo un valor individual
*/
let x = 10;
console.log(x.length);//undefined

/* 
    OBJETO = Puede tener propiedades y metodos

    Definimos una variable que almacena la referencia de un objeto
    Lo que contiene entre { } ocupa un espacio en memoria
    Con sus atributos/propiedades, y sus valores (nombre: 'Juan')

=>  Lo que realmente almacena la var persona es la referencia en memoria (0x31332)

    */

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    mail: 'jperez@mail.com',
    edad: 28
}

//Accedemos a las propiedades/atributos del objeto

console.log(persona.nombre);//Juan
console.log(persona.mail);
console.log(persona.edad);//28
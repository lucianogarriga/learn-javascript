/*TIPOS DE DATOS EN JAVASCRIPT - Y VALORES
*/

//Tipo de dato: STRING
var nombre = "Pedro";

console.log(nombre);
console.log(typeof nombre);

//Tipo de dato: NUMBER
var number = 1111;

console.log(number);

//Tipo de dato: OBJECT
var object = {
    nombre: 'Luciano',
    apellido: 'Garriga',
    telefono: 123456
}

console.log(object);
console.log(typeof object);

//Tipo de dato: BOOLEAN
var bandera = true;

console.log(bandera);
console.log(typeof bandera);

//Tipo de dato: FUNCTION
function miFuncion(){};

console.log(typeof miFuncion);

//Tipo de dato: SYMBOL
//para crear un valor unico de una var
var simbolo = Symbol("Mi simbolo");

console.log(typeof Symbol);

//Tipo CLASE es una function
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Tipo UNDEFINED => Una variable que NO esta definida
// Es tanto 
// 1) Un valor que se puede asignar a una variable
// 2) Un tipo de dato -- Ej. var x = undefined;
var x;

console.log(x);
console.log(typeof x);

// **Tipo NULL** => Ausencia de valor (no tiene valor asignado todavia)
var y = null;

console.log(y);
console.log(typeof null);
//**Su tipo de dato es Object, NO null, porque NO es un tipo de dato.


// ARRAYS = Son tipo Object
var autos = ['BMW', 'Audi', 'Volvo'];

console.log(autos);
console.log(typeof autos);

//EMPTY STRING => NO ES UN TIPO DE DATOS
//Pero si un valor que podemos asignar
var x = '';

console.log(x);
console.log(typeof x);
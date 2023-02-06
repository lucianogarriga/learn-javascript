// VAR - LET - CONST

//let => P/ definir variables que queremos modificar
//const => P/ definir variables que luego NO queremos modificar

let nombre;
nombre = "Pedro";

console.log(nombre);//Pedro

/*En algunas ocasiones, conviene primero declarar la variable 
(por no tener su valor en su momento)
y asignarle el valor de manera posterior*/

const apellido = "Perez";
apellido = "Lara";//Assignment to constant variable

//Una vez asignado un valor a una const, no se puede modificar luego

//CAMELCASE al nombrar variables con 2 o mas palabras

let nombreCompleto = "Juan Perez";
console.log(nombreCompleto);//Juan Perez

let x,y;
x = 10, y = 20;
let z = x + y;
console.log(z);

let _1nombre = "Nombre";
let $apellido = "Apellido";
//En Js no se puede declarar el nombre de una variable que comience con un numero
//Los caracteres permitidos son letas (May o Min), _ o $


//Si queremos definir una variable con una palabra reservada,
//Mostrara un mensaje con un error
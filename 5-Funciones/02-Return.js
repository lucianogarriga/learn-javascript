//Declaracion de funcion

//RETURN = No basta imprimir el resultado,
//sino que la funcion regresa el valor de la suma operada

function miFuncion(a,b){
    return a + b;
}

//De esta manera, se puede imprimir el resultado o asignarlo a una variable.

let resultado = miFuncion(4,6);

console.log(resultado);


/* Cuando trabajamos con funciones, poddemos asignar a una variable y evitar colocarle nombre
FUNCIONES DE TIPO EXPRESION O ANONIMAS
*/

//Declaracion de Funcion de Tipo Expresion
//Primero definir una var y asignar una funcion con sus argumentos
let sumar = function(a,b){
    return a + b;
};

resultado = sumar(1,2);
console.log(resultado);
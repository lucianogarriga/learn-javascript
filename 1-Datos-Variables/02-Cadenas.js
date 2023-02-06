//CONCATENACION DE CADENAS - STRINGS

var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);//Juan Perez

var x = nombre + 2 + 10;
console.log(x);//Juan210

x = nombre + (2 + 10);
console.log(x);//Juan12

x = 2 + 10 + nombre;
console.log(x);//12Juan
//El resultado es similar a cuando usamos los parentesis ( )

/*En Javascript las expresiones se evaluan de izquierda a derecha
Como el primer dato es un numero, el siguiente lo tomara como numero
Si el primero es un string, el segundo lo tomara como string tambien
- A menos que las expresiones numericas las coloquemos entre parentesis () - 
En ese caso toman prioridad los parentesis */
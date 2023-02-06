let x = 3, y = 2;
let z = x + y;

//----------- Incremento ---------------
//Pre-incremento (el operador ++ antes de la var)
z = ++x;
console.log(x);//4
console.log(z);//4

//Post-incremento (el operador ++ despues de la var)
z = y++;
//Primero se asigna el valor de "b" a "z" y luego se incrementa
console.log(y);//3
console.log(z);//4


//----------- Decremento ----------------
//Pre-decremento
z = --x;
//Primero se decrementa, y luego se asigna "a"
console.log(x);//De 4 paso a 3
console.log(z);

//Post-decremento
z = y--;
console.log(y);
console.log(z);

// ------- PRECEDENCIA DE OPERADORES ------------- 

/* Todas las expresiones se realizan de Izq a Der
    SALVO
    -  Los operandos de incremento o decremento (++ o --)
    - Negacion (!) , delete, typeof y void */

/*Prioridades: 
    1- (), [],  . (Acceso a propiedades de objetos), new
    2- ++ --, + -, !, delete, typeof, void
    3- *  /   %
    4- +  -
    5- >> << 
    6- < <=  > >=
    7- == != === !==
*/

let a = 3, b = 2, c = 1, d = 4;

operacion = a * b + c / d;
// (a * b) + (c / d)
// 6 + 0.25
console.log(operacion);

operacion = c + a * b / d;
//Al ser de misma prioridad * y /, se ejecutara lo que se encuentre 1ro de izq a der
// c + (a * b) / d
// c + ( result / d)
// (c + result)
console.log(operacion);
/*
    En la parte superior de nuestro archivo podemos agregar la definicion de "use strict"
    Tambien se lo puede agregar dentro de alguna funcion en particular
    OBJETIVO = Para que no podamos utilizar variables que no han sido definidas
*/

"use strict"

miFuncion();

function miFuncion(){
    let y = 15;
    console.log(y);
}

x = 10;// x is not defined
console.log(x);
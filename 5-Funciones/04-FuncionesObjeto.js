//FUNCIONES COMO OBJETOS

//Los objetos en Js pueden tener propiedades y metodos, asociados a cada objeto
//Las funciones se pueden describir como objetos con propiedades y metodos.

/*
    PROPIEDAD ARGUMENTS => P/ saber cuantos argumentos ha recibido la funcion
*/

function miFuncion(a,b){
    console.log(arguments.length);
    return a + b;
}

let resultado = miFuncion(2,3);
console.log(resultado);

/*
    METODO TO-STRING => Asignar nuestra funcion pero como si fuera Texto
*/

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto);
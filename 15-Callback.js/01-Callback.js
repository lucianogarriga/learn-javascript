/*
    FUNCIONES CALLBACK (llamar de vuelta)
    Se pasa una funcion como parametro de otra funcion, para re utilizarla dentro de esta.
    Dentro de la nueva funcion, se puede mandar a llamar la funcion que pasamos por param.
*/

function funcion1(){
    console.log('Funcion 1');
}
function funcion2(){
    console.log('Funcion 2');
}

//En Js las funciones se ejecutan de manera SECUENCIAL, conforme vayan avanzando las lineas de codigo

funcion1();
funcion2();



// FUNCIONES CALLBACK

function imprimir(mensaje){
    console.log(mensaje);//Resultado: 8 ​​​
}

function sumar(op1,op2, fCallback){
    let res = op1 + op2;
    fCallback(`Resultado: ${res}`);
}

sumar(3,5,imprimir);
//Le pasamos la funcion sin (), ya que las funciones en Js tambien son OBJETOS

// LLAMADAS ASINCRONAS CON setTimeOut()

function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 seg');
}
setTimeout(miFuncionCallback,3000);

//Con Arrow Functions

setTimeout( () => console.log('Saludo asincrono de 5 segundos'), 5000);
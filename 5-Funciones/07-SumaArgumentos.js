/*
    En Js (SALVO sintaxis de arrow functions)
    Podemos aplicar el HOISTING => Utilizar la funcion antes de haberla declarado
    1ro. Vamos a llamarla. Luego la declaramos
*/

let resultado = sumarTodo(5, 4, 13, 10, 9);

function sumarTodo(){
    //Vamos a definir varias variables p/ iterar el array de argumentos
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}

console.log(resultado);

/* 
    CONCLUSION

    De esta manera podemos pasar dinamicamente tantos argumentos como sea necesario
    SIN especificar Parametros
*/
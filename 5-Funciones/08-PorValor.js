/* 
            PASO POR VALOR - TIPOS PRIMITIVOS

    POR VALOR:
        Cuando utilizamos tipos que NO son objetos (num, string, bool, etc.).
        Lo aplicamos en funciones, cuando le enviamos argumentos.
        NO podemos modificar el valor, a dif de la por referencia.
*/

let x = 10;

//Aqui "x" es un VALOR PRIMITIVO = No podemos asignarle funciones ni metodos

//Podemos crear una funcion y utilizar dicho valor. Pero lo que se hace es enviar una copia.

function cambiarValor(a){
    a = 20; 
    //Aqui no estamos regresando nada. Solo cambiando de valor
}

//Paso por Valor
cambiarValor(x);//10
console.log(x);
console.log(a);//a is not defined

//En este caso, cualquier cambio en la var "a" no modifica el valor de otras variables (como x);
//"a" no esta definida porque es un "argumento del metodo", 
//por lo cual la variable se destruye al momento en que termina la llamada al metodo
//Por eso, no es posible utilizarla por fuera del metodo

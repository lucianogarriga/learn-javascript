// PARAMETROS Y ARGUMENTOS

let sumar = function(a,b){
    return a + b
};

/* PARAMETROS (a,b)

    Si bien en la practica los podemos utilizar de manera similar, tienen sus dif.
    Cuando definimos una funcion, dentro de los ( ) definimos variables
    A dichas variables dentro de ( ) las conocemos como PARAMETROS de la funcion

    -- Cuando declaramos una funcion, las variables que reciba => Son PARAMETROS
    La lista de valores que recibe la funcion => Parametros
    La lista de valores que definimos cuando declaramos la Funcion
*/

resultado = sumar(1,2);

/* ARGUMENTOS (1,2)

    Son los valores que finalmente pasamos a nuestra funcion.
    Cuando LLAMAMOS la funcion => esos son los ARGUMENTOS
    Ya que son los valores que le asignamos a los parametros que definimos en la funcion.
    --> SOBREESCRIBEN LOS VALORES DE LOS PARAMETROS POR DEFAULT

*/

let suma = function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

resultado = suma(5,19);

/*
    Como las funciones son objetos, se puede acceder a sus propiedades.
    Se puede acceder a sus elementos como en los Arrays
    En Js no es necesario especificar todos los argumentos.
    Pero si no pasamos alguno, arrojara Undefined por no estar definido.
    Tambien podemos llamar argumentos que no hemos pasado, y dara Undefined tambien.

    EN JAVASCRIPT NO ES NECESARIO QUE COINCIDAN EL NUM DE ARGUMENTOS CON EL NUM DE PARAMETROS

    Si pasamos un argumento que no pasamos por parametro, podremos acceder por la prop arguments

*/
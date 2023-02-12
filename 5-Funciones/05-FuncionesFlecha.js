//Declaracion de Funcion de Tipo Expresion

//declaramos una var - y le asignamos la referencia de una funcion
let sumar = function(a,b){
    return a + b;
};

resultado = sumar(1,2);
console.log(resultado);

// FUNCION FLECHA

const sumarFunFlecha = (a,b) => a + b;

resultado = sumarFunFlecha(2,14);
console.log(resultado);

/*
    - Declaramos una variable pero con CONST
    - Una vez creada la funcion = se le asigna la referencia a la variable (const)
    - (De esta manera, se la podra reutilizar posteriormente)
    - Una vez asignada la referencia a la const =>
    Lo mas comun es que no modifiquemos esa referencia/valor que se asigno a const
*/
/*
    - NO SE UTILIZA la palabra reservada FUNCTION
    - Se va directo a los argumentos (a,b)
    - NO SE UTILIZAN LLAVES {}
    - Se utiliza la flecha =>
    - NO SE UTILIZA EL RETURN
*/
/*
    - Toda la funcion flecha se asigna en un espacio de memoria
    - Por eso la referencia donde se almacena se asigna a la const
    - Para que a traves de la const mandemos a llamar la funcion flecha
 */
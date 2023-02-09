//FUNCIONES SELF-INVOKING (se llaman a si mismas)

(function(){
    console.log('Ejecutando la funcion');
})();

//Al final agregamos () para indicar que se ejecute
//El detalle es que no se puede reutilizar, 
//porque no la asignamos a ninguna variable y no tiene nombre

//En desarrollo web pueden ser utiles al momento de cargar el programa


//EJEMPLO CON PARAMETROS

(function(a,b){
    console.log('Ejecutando la funcion suma: ' + (a+b));
})(2,8);
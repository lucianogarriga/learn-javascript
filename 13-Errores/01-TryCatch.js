//Haremos uso del 'use strict' para que arroje errores al usar var no declaradas

'use strict'

    try{ 
        x = 10;
    }
    //Capturar el error que se arroje
    //lo recibimos como param (error)
    catch(error){
        console.log(error); // [ReferenceError: x is not defined]
        //1ro envia el Tipo de error - luego el error en si
    }
    //El error que traemos previo, lo catcheamos(almacenamos) en la var error
    //luego lo mandamos a imprimir y arroja el mensaje del error
    finally{
        console.log('Fin de revision');
    }
    //El bloque finally se ejecuta por mas errores que tenga el programa
    //Finally es OPCIONAL

console.log('continuamos...');
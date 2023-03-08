//Con la clausula Throw podemos manejar nuestros propios errores

'use strict'

    try{ 
        let x = 10;
        throw 'Mi error';
    }
    catch(error){
        console.log(error); //  
    }
    finally{
        console.log('Fin de revision');
    }

console.log('continuamos...');


let resultado = '';

try{
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es un string vacio';
    else if(resultado >= 0) throw 'Valor positivo';
}
catch(error){
    console.log(error);//Es un string vacio
    console.log(error.name);//undefined
    console.log(error.message);//undefined
}


try{
    x = 10;
}
catch(error){
    console.log(error);//[ReferenceError: x is not defined]
    console.log(error.name);//ReferenceError
    console.log(error.message);//x is not defined
}
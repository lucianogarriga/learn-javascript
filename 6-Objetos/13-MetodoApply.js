let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Gomez',
}

//Uso de Apply
//Nos permite llamar a un metodo en un objeto, que no tiene definido cierto metodo

//PRIMERA LLAMADA = Solo hacemos uso de la funcion nombreCompleto
console.log(persona1.nombreCompleto());

//SEGUNDA LLAMADA = Aplicamos al objeto 'persona2' los metodos definidos en 'persona1' con Metodo APPLY
//Y le pasamos como argumento el objeto 'persona2'
console.log(persona1.nombreCompleto.apply(persona2));




//---------------------------------------------------------------------------------------------------



/*
    HASTA AQUI FUNCIONA IGUAL QUE EL METODO CALL
    AHORA APLICAREMOS UNAS MODIFICACIONES
*/

let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    //Pasaremos parametos en el metodo 'nombreCompleto'
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona4 = {
    nombre: 'Carlos',
    apellido: 'Gomez',
}

console.log(persona3.nombreCompleto('Lic', 123456));//Lic: Juan Perez, 123456

//En el metodo call, los parametros se pasan por separado, uno por uno, seguidos de una 'coma'
//En el metodo apply, se pasa un array con los valores de los argumentos que queremos enviar al metodo 'nombreCompleto'
//Definimos un array, y le pasamos los valores de los argumentos a pasar.

let array = ['Ing', '889977'];

//Luego como parte de los valores de la llamada al metodo, pasamos como 2do argumento al array con los valores 

console.log(persona3.nombreCompleto.apply(persona4, array));//Ing: Carlos Gomez, 889977

//Otra alternativa es pasar directamente todos los valores del arreglo como segundo argumento

//console.log(persona3.nombreCompleto.apply(persona4, ['Ing', '889977']));//Ing: Carlos Gomez, 889977
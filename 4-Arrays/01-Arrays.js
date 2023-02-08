//Arrays en Js es un tipo OBJECT
//Permite almacenar varios valores DE UNA SOLA VEZ

//Formas de declarar un ARRAY

//1) Forma clasica - Deprecada - Ya no se utiliza
let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

//2) Forma actual - Recomendada - Asignamos la referencia del Array
//Por referencia = tipo de dato del array / se almacena en Memoria
//La var Cars => almacena la referencia donde se encuentra en memoria el array
//Esta const => La REFERENCIA EN MEMORIA que almacenara esta variable NO SE MODIFICA
//Pero si se puede modificar el contenido del array
const cars = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(cars);



//Acceder a los elementos de un Array

//1- Por indice
console.log(cars[0]);

//2- Recorrer todos los elementos de una vez
for(let i = 0; i < cars.length; i++){
    console.log(i + ' ' + cars[i]);
}


//Modificar datos de un Array

cars[2] = 'Porsche';
console.log(cars);


//AGREGAR DATOS AL ARRAY - Funcion PUSH (se agrega al final del array)

cars.push('Audi');
console.log(cars);


//TAMANO DEL ARRAY - Cantidad de Elementos (NO indices)
console.log(cars.length);


//AGREGAR UN ELEMENTO EN EL PROXIMO INDICE
cars[cars.length] = 'Cadillac';
console.log(cars);


//AGREGAR UN ELEMENTO EN DETERMINADO NUMERO DE INDICE
//Existen elementos vacios - Se recomienda que todos los espacios esten llenos
//Al separar un espacio en memoria para dichos indices, tambien ocupa un espacio
cars[7] = 'Ferrari';
console.log(cars);


//IDENTIFICAR UN ARRAY
//El metodo 'typeof' dira que es tipo object, pero NO que es un Array
console.log(typeof cars);

//1) Utilizar la clase 'Array' y el metodo 'isArray'
console.log(Array.isArray(cars));

//2) La palabra reservada de Js => 'instance of'
//Y se debe aclarar la clase 'Array'
console.log(cars instanceof Array);

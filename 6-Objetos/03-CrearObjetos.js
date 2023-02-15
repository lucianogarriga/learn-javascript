//      MANERAS DE CREAR OBJETOS EN JS

//1) La manera mas comun es la que se utiliza siempre, la recomendada por buenas practicas
//Primero declarar la variable, y luego definir los atributos del objeto

let objeto = {
    prop1: 'Propiedad',
    prop2: 15
}

//2) Palabra reservada: "NEW"
//Con 'new' especificamos que queremos reservar espacio en memoria (0x44223)

let persona = new Object();
//Una vez creado el nuevo objeto en memoria, podemos agregar atributos o metodos dinamicamente
//Todavia no tiene propiedades ni metodos asignados
persona.nombre = 'Carlos';
persona.edad = 25;
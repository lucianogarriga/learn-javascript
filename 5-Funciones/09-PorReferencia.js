/* 
            PASO POR REFERENCIA (Objetos)

    Como vamos a crear un Objeto = Se recomienda definir una variable como const
    Y asignarle una referencia de un objeto
    Luego le agregamos los atributos/propiedades del objeto, con sus valores.
    De esta manera, la variable persona almacena una referencia del objeto

*/

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

//A dif de la var x que almacena un valor primitivo, aqui la const almacena una referencia a un objeto

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Lo que se pasa es la referencia del objeto en memoria (valor hexadecimal con 0x por ejemplo).
//Para que funcione, debemos llamar el metodo y pasar la referencia del objeto a modificar entre ()

//Paso por REFERENCIA
cambiarValorObjeto(persona);
console.log(persona);//{nombre: 'Carlos', apellido: 'Lara'} 

//Al llamar el metodo, se pasa la referencia en memoria (p1) - que en general es un valor hexadecimal
//Por ende, esa variable "p1" apunta al objeto creado en memoria en las lineas anteriores.

//Por esta referencia en memoria, se puede acceder a los atributos definidos y modificarlo x un metodo

//Luego de ejecutarse el metodo, la variable p1 deja de existir.
//En cambio la var persona al haber sido definida fuera del metodo, siempre existira.

/*          SINTESIS

    POR VALOR NO PODEMOS MODIFICAR EL VALOR DE LA VARIABLE.
    POR REFERENCIA SI, PORQUE MODIFICAMOS LOS ATRIBUTOS DE UN OJETO QUE SE ACCEDE POR UN METODO
    Se puede modificar siempre y cuando pasemos la referencia del objeto

*/
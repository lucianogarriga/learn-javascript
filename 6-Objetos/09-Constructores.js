/*  
    Un constructor es una funcion especial que trabaja con objetos en Js.
    Para llamar una funcion Constructor => debemos usar la palabra NEW
    Para reservar espacio en memoria del objeto que queremos crear.
*/

//Se recomienda que los metodos que van a ser constructores de objetos comiencen con Mayuscula
//No es necesario trabajar con clases para crear objetos a traves de constructores

//Function constructor de objetos del mismo tipo (Persona)
//En los parametros, iran los atributos de la clase/objeto

function Persona(paramNombre,paramApellido,paramEmail){
    //operador "this" para indicar las propiedades de este objeto
    //luego le asignamos el valor del argumento que estamos recibiendo
    //en este caso, el nombre del parametro (){} es igual al nombre del atributo (this.)
    this.nombre = paramNombre;
    this.apellido = paramApellido;
    this.email = paramEmail;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Crearemos un objeto de tipo Persona reutilizando el codigo

let padre = new Persona();

//Si no pasamos nada, podemos asignar valores por default en los parametros de la funcion.
//Ejemplo: function Persona(paramNombre = 'Juan', paramApellido = 'Perez',paramEmail)

let hijo = new Persona('Eric', 'Funes', 'efunes@mail.com');
//hijo ya no es una variable, sino que es un METODO
//que permite crear un nuevo Objeto de tipo Persona

console.log(hijo);

let madre = new Persona('Sofia', 'Gomez', 'sgomez@gmail.com');
console.log(madre);

//Si queremos modificar una propiedad de un objeto, lo indicamos con el metodo seguido de un punto
padre.nombre = 'Ernesto';
console.log(padre);

//Si queremos agregar una nueva propiedad, podemos hacerlo a 1 objeto o desde el constructor para todos
console.log(hijo.nombreCompleto());
console.log(madre.nombreCompleto());
//METODOS GET & SET

//Para acceder a la info de un atributo, ya sea para leerlo o modificarlo,
//podemos agregar un metodo GET para leer la informacion del atributo.
//o podemos agregar un metodo SET para modificar el valor del atributo.

//El metodo GET no se puede llamar igual que la propiedad

class Persona {
    constructor(nombre,apellido){ 
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //metodo GET para la propiedad 'nombre'
    //primero establecemos la palabra reservada 'get'
    //luego asignamos el nombre del metodo()
    get nombre(){
        return this._nombre;
    }
    //Definimos un 3er metodo 
    //El parametro es el valor que le asignaremos al atributo
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
//Luego de crear nuestro objeto, podemos acceder a la propiedad de nombre,
//mediante el metodo 'get'
console.log(persona1.nombre);
//En este caso no es necesario utilizar parentesis, porque es un metodo GET

//METODO SET

persona1.nombre = 'Jose Maria';
//Se le asigna el parametro al argumento del metodo SET,
//el cual le asignara luego el valor que le pasemos hacia el atributo
console.log(persona1.nombre);
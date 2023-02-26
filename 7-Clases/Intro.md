# CLASES

Una clase es una plantilla.
Posee atributos y metodos.

Un OBJETO es una INSTANCIA de una CLASE

Es decir, a partir de la CLASE (plantilla) que definamos, luego podremos crear INSTANCIAS (Objetos).

La CLASE en principio NO TIENE VALORES. En caso de que si tenga, seran aplicables a todos las instancias que se creen posteriormente.

## CARACTERISTICAS DE UNA CLASE

* NOMBRE: Persona

* ATRIBUTOS: 
name: string
age: number
gen: char

* METODOS:
getName(): string
getAge(): number
modName(name: string)
modGen(gen: string)

Las instancias creadas en virtud de una clase, compartiran las mismas caracteristicas.
Sin embargo, cada objeto tendra sus valores particulares.

1- La sintaxis clasica es iniciar con la palabra reservada 'class'  
2- Luego definimos el nombre de la clase (se recomienda que inicie con letra mayuscula).  
Si el nombre posee mas de una palabra, se debe emplear la metodologia camelCase.  
Luego, abrimos el cuerpo de la clase con { }

```js
    class Persona { 

    }
```

3- El siguiente paso, es agregar un CONSTRUCTOR, con su palabra reservada.  
Es muy parecido a la funcion **constructor** para crear un Objeto en Js.   
Luego del constructor, colocamos parentesis () dentro de los cuales podemos pasar parametros.  
Luego, abrimos el cuerpo del constructor con { }

```js
    class Persona { 
        constructor(){

        }
    }
```

4- Dentro del metodo constructor, podemos definir los atributos y metodos de la clase.  
5- Dentro de los () podemos definir parametros del constuctor.  
6- Luego, declaramos e inicializamos los atributos de la clase.  
La manera de trabajar con sus atributos es parecido al de los objetos (con operador 'this')  
7- Luego, para asignar el valor del argumento, le asignamos el valor del parametro que recibimos por ().

```js
    class Persona {
        constructor(nombre,apellido){
            //apellido = es el nombre del parametro
            //this.apellido = nombre del atributo de la clase
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
```

Luego, el valor (por parametro) se lo vamos a asignar al nuevo atributo.

### * *apellido* = variable que se toma por parametro
### * *this.apellido* = atributo de la clase
<br>

## CREAR UNA INSTANCIA DE LA CLASE

Para crear un objeto, se define la variable y se define con la palabra reservada 'new' la creacion de una instancia de la clase 'Persona'.

De esta manera le indicamos a Js que reserve un nuevo espacio en memoria para crear un objeto de tipo **Persona**.

```js
    let persona1 = new Persona();
```

Con esta sintaxis, lo que estamos haciendo es mandar a llamar al **constructor** de la clase.
El constructor solo se manda a llamar 1 sola vez.
Para crear una instancia de la clase, colocamos los valores de la variable que se utilizaran al llamar al constructor.

```js
    let persona1 = new Persona('Juan', 'Perez');
    console.log(persona1);//Persona {nombre: 'Juan', apellido: 'Perez'}

```

### Cuando trabajamos con CLASES, NO SE APLICA EL HOISTING.
Es decir que primero debemos definir la clase para poder utilizarla.
Si queremos crear un objeto de determinado tipo, antes de haber creado la clase, no podremos crear dicho objeto, por lo que no se aplica el Hoisting.


## HERENCIA
<br> 
Cuando trabajamos con Js podemos aplicar el concepto de HERENCIA para reutilizar codigo y poder heredar (EXTENDS) caracteristicas de una clase padre a una clase hija.

La clase hija tiene caracteristicas particulares, que no posee el padre.

Al utilizar Herencia y crear un objeto de la clase hija, se debe llamar al constructor del padre con la palabra SUPER.

**Dentro de una clase, no es necesario colocar la palabra *function***

<br>

## SOBRE ESCRITURA

Desde la clase HIJA modificamos el comportamiento definido en un metodo de la clase PADRE.
Esto sucede porque el metodo definido en la clase PADRE no esta completo en la clase HIJA.

<br>

## CLASE OBJECT EN JS
La clase Object es la clase PADRE de todas las clases en Javascript.

Cuando definimos una clase, de manera implicita hereda (extends) de la clase Object, pero no se declara de manera explicita como cuando heredamos atributos y metodos de cualquier clase.

La clase Object contiene varios metodos:

* **toString()** : permite mandar a imprimir informacion del estado del objeto (valores actuales de cada atributo del objeto).
Es considerada buena practica agregar este metodo en la definicion de nuestras clases.

Tambien existen otros metodos que se encuentran definidos en el atributo **prototype**:

* uno de ellos es el metodo toString( )
* hasOwnProperty( )
* isPrototypeOf( )
* toLocaleString( )
* valueOf( )

-- Cuando trabajemos con clases, podremos heredar las caracteristicas de la clase object, incluyendo 'prototype' y los metodos relacionados a este objeto. 

Para obtener los datos de atributos heredados de una clase padre, el navegador no puede acceder de manera directa.  
Se debe acceder con el metodo **toString()**, pero de esta manera originaria devuelve el valor **[object Object]**.  
Entonces, debemos sobreescribir el comportamiento del metodo toString heredado de la clase Object.prototype

```js
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }
    //Sobreescribir metodo heredado de la clase Object.prototype.toString()
    toString(){
        //Se aplica POLIMORFISMO
        //reutilizaremos el codigo del metodo nombreCompleto()
        return this.nombreCompleto();
    }
```
```js  
    //Sobreescritura del metodo toString() heredado por el padre de la clase Object
    console.log(empleado1.toString());
    //De esta manera vemos que se ha mandado a llamar el metodo de la clase HIJA

    //A ESTO SE LO CONOCE COMO POLIMORFISMO
```

## POLIMORFISMO (Multiples formas en tiempo de ejecucion)
<br> 

El metodo que se ejecuta depende si es una referencia de tipo PADRE o de tipo HIJO.  

```js
    let persona1 = new Persona('Juan', 'Perez');
    let empleado1 = new Empleado('Pedro', 'Gomez', 'Legales');

    console.log(empleado1.toString());// Pedro Gomez, Legales
    console.log(persona1.toString());//Juan Perez
```

Desde un Objeto podemos mandar a llamar un metodo definido en la clase padre o en la hija.  
Pero depende del objeto con el que estemos trabajando. Si estamos trabajando con una referencia de un objeto de la clase hija (empleado), entonces el metodo que se manda a ejecutar es el de la clase hija.   
Pero si trabajamos con la referencia de un objeto del padre (persona1) sera con el metodo del padre. 

<br>

---
<br>

## STATIC

Una vez definida la clase, ademas de agregar metodos que se asocien con los objetos, tambien se pueden agregar metodos que se asocien con la clase exclusivamente.

De esta manera, se pueden agregar metodos **ESTATICOS** 

## NO STATICS

Ya hemos trabajado con atributos no estaticos, como los que se asocian con los objetos de una clase (ej. nombre, apellido).
Asimismo, podemos agregar atributos a nuestra clase SIN declararlos en el constructor.

Al ser **no estaticos** se asocia con los objetos y NO con la clase en si.


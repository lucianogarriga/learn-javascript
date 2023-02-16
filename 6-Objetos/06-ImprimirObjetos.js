//IMPRIMIR VALORES DE LOS OBJETOS

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    mail: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}


// 1) Concatenar el valor de cada propiedad

console.log(persona.nombre + ', ' + persona.apellido);

// 2) FOR IN

for(nombreProp in persona){
    console.log(persona[nombreProp]);
}

//  3) Metodo => Object.values()
//En este caso nos devuelve un array

let personaArray = Object.values(persona);

console.log(personaArray);
//De esta manera podemos acceder a los valores de las props del objeto

//  4) Convertir a Cadena/String - Metodo JSON.stringify

let personaString = JSON.stringify(persona);

console.log(personaString);
//JSON tambien utiiza la anotacion "propiedad-valor" (key-value)
//Stringify = cada valor de las propiedades las convierte a strings
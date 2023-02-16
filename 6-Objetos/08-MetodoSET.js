//          METODO SET 

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 29,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    //.toUpperCase al ser un metodo lleva los ()
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Agregar validaciones cuando almacenamos o recuperamos informacion de nuestros objetos
console.log(persona.lang);//ES

//Los METODOS SET => Se utilizan para modificar los valores de los atributos del objeto

persona.lang = 'us';
//El valor que proporcionamos se dirige al metodo set lang(lang) y actua como parametro del metodo
//Al detectar el simbolo = (que es asignacion de valor), directamente llama al metodo SET
//Y previo a asignar el valor, se ejecuta el metodo que dentro tiene la conversion a mayusculas

console.log(persona.lang);//US
console.log(persona.idioma);//US
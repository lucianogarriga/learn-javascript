/* 
    FUNCIONES FLECHA

    1- Las funciones no tienen nombre - Son ANOMINMAS
    2- Se las asigna a una VAR (let, const)
    3- No es necesario utilizar la palabra reservada 'function'
    4- Luego del nombre de la variable, se debe colocar los () para indicar si recibe o no params
    5- Antes de abrir el cuerpo de la funcion '{' se debe pasar una flecha =>
    6- DETALLE EXTRA - NO SE APLICA HOISTING CON LAS ARROW FUNCTIONS
    - No se puede acceder antes de definirla
*/

// const miFuncionFlecha = () => {
//     console.log('Esta es una funcion flecha');
// }

//          A) Si es 1 linea de codigo, se puede hacer sin abrir el cuerpo de la funcion con {}
const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');

miFuncionFlecha();

//          B) Si solo regresa 1 string, no es necesario colocar el return
const saludar = () => 'Saludos desde mi funcion saludar';

console.log(saludar()); // Saludos desde mi funcion saludar 

//          C) Para regresar un Objeto
const regresaObjeto = () => ({ nombre: 'Juan', apellido: 'Perez' });

console.log(regresaObjeto());// { nombre: 'Juan', apellido: 'Perez' }

//          D) Para regresar los parametros 

const param = (mensaje,edad) => console.log(mensaje + edad);

param('El parametro de la funcion lleva el numero ',45); //El parametro de la funcion lleva el numero 45 

//Si lleva 1 solo parametro, no es necesario que lleve los ()

const param2 = mensaje2 => console.log(mensaje2);

param2('Esta funcion tiene 1 solo param'); //Esta funcion tiene 1 solo param 

//          E) Funcion con 2 params y definir 1 var en el cuerpo de la funcion

const operacion = (a,b) =>{
    let resultado = a * b;
    return `El resultado es ${resultado}`;
}

console.log(operacion(3,5));//El resultado es 15
// Analizar si tiene edad suficiente para votar

let miNumero = "18x";

//Number => funcion para convertir el tipo de dato a Number
let edad = Number(miNumero);

console.log(edad);


//Validar que el tipo de dato es NUMBER => con funcion isNaN()

if (isNaN(edad)) {
    console.log("No es un numero");
} else {
    if (edad >= 18) {
        console.log("Puede votar");
    } else {
        console.log("No puede votar");
    }
}

if (isNaN(edad)) {
    console.log("No es un numero");
} else {
    //Modalidad optimizada con Operador Ternario
    let resultado = (edad >= 18) ? "puede votar" : "no puede votar";
    console.log(resultado);
}

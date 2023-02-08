let numero = 5;
let numeroTexto = "Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "Numero 1";
        break;
        //fundamental colocar los brake sino continua ejecutando los demas
    case 2:
        numeroTexto = "Numero 2";
        break;
    case 3:
        numeroTexto = "Numero 3";
        break;
    case 4:
        numeroTexto = "Numero 4";
        break;

    default:
        numeroTexto = "El numero no esta entre 1 y 4"
        break;
        //el break del default puede no ir por ser el ultimo
}

//VER = el log va fuera de la estructura
console.log(numeroTexto);


// EJERCICIO DE MESES Y ESTACIONES

let mes = 6;
let estacion = "Estacion desconocida";

switch(mes){
    case 12: case 1: case 2 : case 3:
        estacion = "Verano";
        break;
    case 4: case 5:
        estacion = "Otono";
        break;
    case 6: case 7: case 8:
        estacion = "Invierno";
        break;
    case 9: case 10: case 11:
        estacion = "Primavera";
        break;
    default:
        estacion = "Mes incorrecto";
        break;
}

console.log(estacion);
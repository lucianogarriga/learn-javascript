//SENTENCIAS DE CONTROL - IF/ELSE

let condicion = true;

if(condicion){
    console.log("Condicion verdadera");
} else {
    console.log("Condicion falsa");
}

// EJERCICIO 1

let mes = 11;
let estacion;

if(mes >= 1 && mes <= 3){
    estacion = "Verano";
} else if (mes > 3 && mes <6) {
    estacion = "Otono"; 
} else if (mes >= 6 && mes <9) {
    estacion = "Invierno"; 
}  else if (mes >= 9 && mes <=12) {
    estacion = "Primavera"; 
}  else {
    estacion = "Valor incorrecto";
    console.log("Mes incorrecto");
}

console.log("La estacion es " + estacion);

// EJERCICIO 2

let horario = 8;
let mensaje;

if (horario >= 6 && horario <=11){
    mensaje = "Buenos dias";
} else if  (horario >= 12 && horario <=18){
    mensaje = "Buenas tardes";
} else if  (horario >= 19 && horario <=24){
    mensaje = "Buenas noches";
} else if  (horario >= 0 && horario <=6){
    mensaje = "Durmiendo";
} else {
    mensaje = "Horario incorrecto";
}

console.log(mensaje);
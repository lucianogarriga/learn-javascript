// AND &&

let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax){
    console.log("Esta dentro de rango");
} else {
    console.log("Esta fuera de rango");
}

// OR ||

/* Preguntar si un padre puede ir a ver jugar al hijo
Podra si tiene 1 dia libre o si esta de vacaciones
*/

let vacaciones = false, diaLibre = false;

if (vacaciones || diaLibre ){
    console.log("Podra ver jugar al hijo");
} else {
    console.log("No podra ver al hijo");
}


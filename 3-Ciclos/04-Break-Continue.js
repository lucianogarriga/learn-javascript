//BREAK
//Ciclo for de los numeros del 0 al 10
//Encontrar y mostrar solo el primer numero par

for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
        //si queremos salir al primer numero par encontrado
        break;
    } 
}

console.log("Fin del ciclo for - Primer numero par encontrado");

//CONTINUE
//Preguntar si el numero no es par
//Si es true, continuamos a la prox iteracion y no imprimimos ese valor 

for(let contador = 0; contador <=10; contador++){
    if(contador %2 !== 0){
        continue;//ir a la prox iteracion //comienza nuevamente el ciclo for
    } 
    console.log(contador);
}

//ETIQUETAS - LABEL
//En este caso sera inicio

inicio:
for(let contador = 0; contador <=10; contador++){
    if(contador %2 !== 0){
        continue inicio;//si es true, continuara a la etiqueta inicio
    } 
    console.log(contador);
}
// WHILE

//Si la condicion es Falsa, el codigo no se ejecuta NUNCA
//Para ejecutar un ciclo, necesitamos definir un contador
//El contador nos permitira terminar el ciclo en algun momento

let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}
//Como terminamos con {} no es necesario colocar ;
console.log("Fin del ciclo while");


//DO WHILE
//A diferencia del while, nuestro codigo se ejecutara 1 sola vez
//Luego pregunta la condicion, y si es falsa solo se ejecuta esa vez y sale

do{
    console.log(contador);
    contador++;
}while(contador < 5);

console.log("Fin ciclo Do While");


// CICLO FOR
//1-inicializacion de variable , 2-condicion, 3-incrementa/decrementa
//La inicializacion se ejecuta solo 1 vez
//2 y 3 se ejecutan en cada iteracion

for(let i = 0; i < 4; i++){
    console.log(i);
}

console.log("Fin ciclo for");
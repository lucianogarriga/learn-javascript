//Operador de comparacion

let a = 3, b = 2, c = '3';

let z = a == b;//Revisa valor - No tipo
console.log(z);//false

z = a === c;//Revisa valores y tipos
console.log(z);//false

z = a == c;//Revisa valores - No tipos
//El string se convierte a number
console.log(z);//true


//Operador Distinto A  ( != )
z = 5 != c;
console.log(z);//true

z = a != c;
console.log(z);//false

z = a !== c;
console.log(z);//true
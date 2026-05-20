var issoEumaString = "Isso é uma string";
let issoEumNumero = 42;
const issoEumBooleano = true;
let issoTambemEumaString = "42";


if (issoEumNumero === issoTambemEumaString) {
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
}

console.log(issoEumNumero + issoTambemEumaString);

console.log(issoEumNumero + issoEumNumero);

var issoEumaGlobal = "Eu sou uma variável global";

{
    let issoEumaLocal = "Eu sou uma variável local";
    console.log(issoEumaGlobal);
    console.log(issoEumaLocal);
}

console.log(issoEumaGlobal);
//console.log(issoEumaLocal); // Isso causará um erro, pois issoEumLocal não está definido fora do bloco

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log(sum.toPrecision(2)); // Isso pode resultar em 0.07000001 devido á precisão dos números de ponto flutuante

for (let i =0; i <5; i++) {
    console.log(i);
    console.log(i*2);
    console.log (i*2+1);
}

let j = 0;
while (j < 5) {
    console.log(j*2+1);
    j++;
}

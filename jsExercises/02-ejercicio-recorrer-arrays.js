// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Recorremos el array con un bucle for
for(let i = 0 ; i < numeros.length ; i++){
    console.log(`Indice: ${i}: ${numeros[i]}`);
    //console.log("Indice: " + i + ": " + numeros[i]);
}

// 3. Recorremos el array con forEach
numeros.forEach(numero => {
    console.log(numero);
});
//forEach con acceso al índice
numeros.forEach((numero, indice) => {
    console.log(`Indice ${indice}: ${numero}`);
});

// 4. Calculamos la suma de los números usando for
let sumaFor = 0;
for(let i = 0 ; i < numeros.length ; i++){
    sumaFor = sumaFor + numeros[i];
    //sumaFor+= numeros[i];
}
console.log(`La suma es: ${sumaFor}`);

// 5. Calculamos la suma de los números usando forEach
let sumaForeach = 0;
numeros.forEach(numero => {
    sumaForeach+= numero;
});
console.log(`La suma con forEach es: ${sumaForeach}`);

// 6. Creamos un nuevo array con los números pares usando for
let paresFor = [];
for(let i = 0 ; i < numeros.length ; i++){
    if((numeros[i] % 2) === 0){//comprobar si numeros[i] es un número par
        //añado el elemento al nuevo array paresFor
        paresFor.push(numeros[i]);
    }     
}
console.log("Números pares utilizando for:", paresFor);

// 7. Creamos un nuevo array con los números pares usando forEach
let paresForeach = [];
numeros.forEach(numero => {
    if((numero % 2) === 0){
        paresForeach.push(numero);
    }
});
console.log("Números pares utilizando forEach:", paresForeach);
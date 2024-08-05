// Ejercicio: Manejo básico de arrays en JavaScript

// 1. Crea un array llamado 'frutas' con 5 nombres de frutas
let frutas = ['manzana', 'banana', 'naranja', 'uva', 'pera'];

// 2. Imprime el array completo
console.log("Array completo:", frutas);

// 3. Imprime la longitud del array
console.log("Longitud del array:", frutas.length);

// 4. Accede e imprime el tercer elemento del array
console.log("Tercer elemento: ", frutas[2]);

// 5. Añade una fruta al final del array usando push()
frutas.push('kiwi');
console.log("Array después del push: ", frutas);

// 6. Elimina el último elemento del array usando pop()
let frutaEliminada = frutas.pop();
console.log("Fruta eliminada:", frutaEliminada);
console.log("Array después del pop:", frutas);

// 7. Añade una fruta al principio del array usando unshift()
frutas.unshift('fresa');
console.log("Array después del unshift", frutas);

// 8. Elimina el primer elemento del array usando shift()
let primeraFruta = frutas.shift();
console.log("Array final: ", frutas);

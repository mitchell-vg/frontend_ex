// Ejercicio 7: Uso del operador Spread para combinar arrays
// - Declara dos arrays de alimentos
// - Usa spread operator para combinarlos en uno solo
// - Imprime el resultado en la consola
console.log('Ejercicio 7');
const frutas = ["manzana", "pera", "uva"];
const verduras = ["zanahoria", "brocoli"];

// Tu código aquí...
const barrigaLlena = [...frutas, ...verduras]; //spread con tu array

const alimentos1 = {
    fruta : 'guanabana',
    verdura: 'lechuga',
    fruta2: 'guayaba',
  };
const alimentos2 = {
    plato1 : 'lentejas',
    plato2 : 'lasaña',
    plato3 : 'sopa de cuchucu',
};
const barrigaSuperLlena = {...alimentos1, ...alimentos2};

console.log(barrigaLlena);
console.log(barrigaSuperLlena);


// Ejercicio 8: Uso del operador Rest en funciones
// - Crea una función que reciba múltiples argumentos
// - Usa el operador Rest para agruparlos en un array
// - Suma todos los números recibidos y devuelve el resultado
// - Llama a la función con diferentes números y muestra el resultado en la consola
console.log('Ejercicio 8');
// Tu código aquí...

function sumar(...numeros) {
    return numeros.reduce((total,num) => total + num, 0);
    // la funcion reduce de javascript se usa para sumar todos los elementos de un array
}
console.log(sumar(22, 20, 25));


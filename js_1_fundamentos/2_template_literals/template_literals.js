// Ejercicio 3: Uso de Template Literals
// - Crea una función que reciba un objeto con nombre, edad y profesión
// - Retorna un string usando template literals con la información de la persona
// - Llama a la función con un objeto y muestra el resultado en consola
console.log('Ejercicio 3');
// Tu código aquí...
function infoSujeto(sujeto) {
    console.log(`Me llamo ${sujeto.nombre}, tengo ${sujeto.edad}años y me dedico a ${sujeto.profesion}`);
}
sujeto1 = {
    'nombre': 'Jairo',
    'edad': 35,
    'profesion': 'programacion',
}
infoSujeto(sujeto1);

// Ejercicio 4: Template Literals con expresiones matemáticas
// - Declara dos variables con números
// - Crea un string que muestre la suma usando template literals
// - Muestra el resultado en la consola
console.log('Ejercicio 4');
// Tu código aquí...
const a = 2;
const b = 3;

const resultado = (`La suma del número ${a} más el número ${b} es igual a ${a+b}`);
console.log(resultado);
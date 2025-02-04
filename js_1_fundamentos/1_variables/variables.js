
// Ejercicio 1: Declaración de variables con var, let y const
// - Declara una variable con var, otra con let y otra con const
// - Intenta reasignarles nuevos valores y observa qué sucede
// - Imprime los valores en la consola para verificar los cambios
console.log('Ejercicio 1');
// Tu código aquí...
var nombre = "Jairo";
let nombreLet = "JairoLet";
const nombreConst ="JairoConst";

nombre = "kami";
nombreLet ="kamilet";
// nombreConst = "kamiconst";  No se puede REASIGNAR el valor a una constante

console.log(nombre);
console.log(nombreLet);
console.log(nombreConst);


// Ejercicio 2: Scope (Alcance de variables)
// - Crea un bloque de código con un if
// - Declara variables dentro del bloque con var y let
// - Intenta acceder a ellas desde fuera del bloque y observa qué sucede
// - Imprime los valores en la consola
console.log('Ejercicio 2');
// Tu código aquí...

if (true) {
    var peso = 50
    let animal = "perro"
    console.log(animal)
}
console.log(peso)
// console.log(animal) fuera del if no se puede imprimir esta variable

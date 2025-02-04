// Ejercicio 5: Destructuring en objetos
// - Extrae las propiedades de un objeto en variables independientes
// - Imprime las variables en la consola
console.log('Ejercicio 5');
const libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    anio: 1967
  };

  // Tu código aquí...
const {titulo, autor, anio} = libro;
console.log(titulo);
console.log(autor);
console.log(anio);


// Ejercicio 6: Destructuring en arrays
// - Extrae los dos primeros elementos de un array en variables
// - Almacena el resto de los valores en otro array usando rest operator
// - Imprime los valores en la consola
console.log('Ejercicio 6');
const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

// Tu código aquí...
const [primero, segundo, ...resto] = colores;
console.log(primero);
console.log(segundo);
console.log(resto);

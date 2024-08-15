//!Un array es una lista de elementos en una variable
/**Su sintaxis es
 * primero el nombre de la variable
 *  segundo los corchetes
 *  y dentro de los corchetes los elementos
 */
let animales = ["perro", "gato", "loro", "vaca", "cerdo", "conejo", "caballo"];
//asi accedemos al array
console.log(animales);
//asi accedemos a un elemento del array
console.log(animales[1]);
//asi agregamos un elemento al array usando el push -> array.push(elemento)
animales.push("armadillo");
//bien podriamos agregar asi pero esta no es una buena practica
animales[7] = "dragon";
console.log(animales);

console.log(typeof animales); // retornara object, debido a que js toma los arrays como objetos
console.log(animales.length);

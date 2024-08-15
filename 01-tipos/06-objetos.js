// Personaje de tv
let nombre = "Antonio";
let apellido = "Banderas";
let edad = 59;
let estatura = 1.75;
let genero = "masculino";

//!Ahora creamos un objeto literal con los valores de las variables dentro de {}
let personaje1 = {
  // par llave(nombre, apellido etc ) - valor (string, number etc) o proiedades y sus valores
  nombre: "Antonio",
  apellido: "Banderas",
  edad: 59,
  estatura: 1.75,
  genero: "masculino"
};
// console.log(personaje1);
// console.log(personaje1.edad);
// console.log(personaje1["apellido"]);

// Modificamos el valor de una propiedad
/**
 * primero el objeto
 * segundo el nombre de la propiedad
 * tercero el nuevo valor
 */
personaje1.edad = 15;
/**Otra forma
 * primero el objeto
 * segundo dentro de corchetes el nombre de la propiedad
 */
personaje1["edad"] = 25;

//! Eliminar una propiedad asi
/**Usando la palabra reservada delete
 * ejemplo delete personaje1["estatura"]
 */
delete personaje1.edad;
delete personaje1.estatura;
console.log(personaje1);

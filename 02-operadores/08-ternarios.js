// Operadores ternarios funcionan como un if-else
//? por ejemplo: expresion ? valor1 : valor2 se lee asi, si la expresion es verdadera, retornara el valor1, de lo contrario retornara el valor2

/*function esMayorDeEdad(edad) {
  return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}
console.log(esMayorDeEdad(20)); // Debería imprimir "Es mayor de edad"
console.log(esMayorDeEdad(15)); // Debería imprimir "Es menor de edad"*/

//?Ejercicio: Escribe una función llamada evaluarNota que tome un parámetro nota. La función debe devolver:
//?"Sobresaliente" si la nota es mayor o igual a 90.
//?"Notable" si la nota está entre 80 y 89 (incluyendo ambos extremos).
//?"Aprobado" si la nota está entre 60 y 79 (incluyendo ambos extremos).
//?"Suspenso" si la nota es menor a 60.
//?Usa operadores ternarios para resolver este problema.

/*function evaluarNota(nota) {
  return nota >= 90
    ? "Sobresaliente"
    : nota >= 80
    ? "Notable"
    : nota >= 60
    ? "Aprobado"
    : "Suspenso";
}

// Ejemplo de uso:
console.log(evaluarNota(89)); // Debería imprimir "Sobresaliente"
console.log(evaluarNota(85)); // Debería imprimir "Notable"
console.log(evaluarNota(75)); // Debería imprimir "Aprobado"
console.log(evaluarNota(50)); // Debería imprimir "Suspenso" */

//? Ejercicio:
//? Escribe una función llamada clasificarNumero que tome un parámetro numero.
//? La función debe devolver:
//?
//? - "Positivo" si el numero es mayor que 0.
//? - "Negativo" si el numero es menor que 0.
//? - "Cero" si el numero es igual a 0.
//?
//? Usa un operador ternario para resolver este problema.

// function clasificarNumero(numero) {
//   return numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero";
// }

// Ejemplo de uso:
// console.log(clasificarNumero(10)); // Debería imprimir "Positivo"
// console.log(clasificarNumero(-15)); // Debería imprimir "Negativo"
// console.log(clasificarNumero(0)); // Debería imprimir "Cero"

//? Ejercicio:
//? Escribe una función llamada esParOImpar que tome un parámetro numero.
//? La función debe devolver:
//?
//?- "Par" si el numero es divisible por 2.
//? - "Impar" si el numero no es divisible por 2.
//?
//? Usa un operador ternario para resolver este problema.

// function esParOImpar(numero) {
//   return numero % 2 == 0 ? "Par" : "Impar";
// }

// Ejemplo de uso:
// console.log(esParOImpar(4)); // Debería imprimir "Par"
// console.log(esParOImpar(7)); // Debería imprimir "Impar"

//? Ejercicio:
//? Escribe una función llamada calcularDescuento que tome dos parámetros:
//? - precio: el precio original del producto.
//? - esMiembro: un valor booleano que indica si el usuario es miembro o no.
//?
//? La función debe devolver:
//? - El precio con un 20% de descuento si esMiembro es true.
//? - El precio sin descuento si esMiembro es false.
//?
//? Usa un operador ternario para calcular el precio con o sin descuento.

function calcularDescuento(precio, esMiembro) {
  return esMiembro ? precio - (precio * 20) / 100 : precio;
}

// Ejemplo de uso:
console.log(calcularDescuento(80, true)); // Debería imprimir 80 (100 - 20% de descuento)
console.log(calcularDescuento(100, false)); // Debería imprimir 100 (sin descuento)

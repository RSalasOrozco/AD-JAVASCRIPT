// short-circuit-
//! EVALUA EN FALSO
// false - FALSO
// 0 - CERO
// "" O '' - STRING VACIO
// null - VALOR NULO
// undefined - VALOR INDEFINIDO
// NaN - NOT A NUMBER

//? Ejemplo con OR -- || funciona cuando almenos uno de los  valores es verdadero, para que el resultado sea true
let nombre = "Desweb";
let username = nombre || "Anonimo";
console.log(username);

//? Ejemplo con AND -- && funciona cuando dos valores son verdaderos para que el resultado sea verdadero
function fn1() {
  console.log("soy fn1");
  return false;
}
function fn2() {
  console.log("soy fn2");
  return true;
}
// and nos ayudara si tenemos dos funciones y queremos que nos retorne una funcion, por ejemplo si queremos que si la fn1 es verdadera y la fn2 es falsa, nos retorne la fn2
let x = fn1() && fn2();

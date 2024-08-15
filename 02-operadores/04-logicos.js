// los operadores logicos son los que nos permiten realizar operaciones logicas, tales como and -- &&, or-- ||, not -- !

/*console.log(true && true); //true
console.log(true && false); // false
console.log(false && true); // false*/
//? and -- && funciona cuando dos valores son verdaderos para que el resultado sea verdadero ejemplo: true && true = true
let mayor = true;
let suscripcion = true;
console.log("operador AND --", mayor && suscripcion);

//? or -- || funciona cuando almenos uno de los  valores es verdadero, para que el resultado sea true  ejemplo: true || false = true
console.log("operador OR --", mayor || suscrito);

//? not -- ! funciona cuando el valor es verdadero para que el resultado sea falso ejemplo: !true = false
console.log("operador NOT --", !mayor);
let soloCatalogoInfantil = !mayor;

//! USO DE IF ELSE Y OPERADORES TERNARIOS
function cualesEsMayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
// return a > b ? a : b es lo mismo pero con operadores ternarios

let mayor = cualesEsMayor(10, 5);

console.log(mayor);

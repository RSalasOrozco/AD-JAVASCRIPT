//! break nos permite salir de un bucle y continue nos permite continuar o saltar una operacion
//! se pueden usar para los, for,  for in, for of y do while
let i = 0;
while (i < 6) {
  i++;
  if (i === 2) {
    continue;
  }
  if (i === 4) {
    break;
  }
  console.log(i);
}

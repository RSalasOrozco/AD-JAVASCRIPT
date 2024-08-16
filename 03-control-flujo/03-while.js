//! while es un bucle que se repite mientras una condicion sea verdadera
//! tiene dos partes la condicion y el cuerpo de la iteracion del bucle
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
let ia = 0;
while (ia < 10) {
  if (ia % 2 == 0) {
    console.log("Numero par", ia);
  }
  ia++;
}

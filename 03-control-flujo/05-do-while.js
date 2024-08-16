//! DO WHILE evaluara la condician pero al final del bucle
//! tiene dos partes la condicion y el cuerpo de la iteracion del bucle

let i = 0;
// while (i < 3) {
//   if (i % 2 == 0) {
//     console.log("Numero par", i);
//   }
//   i++;
// }
do {
  if (i % 2 == 0) {
    console.log("Numero par", i);
  }
  i++;
} while (i > 10);

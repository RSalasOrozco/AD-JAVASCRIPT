//! el for consiste en que una secuencia de instrucciones se repite un numero de veces en consecuencia a una condicion de iteracion
//! su sintaxis es la siguiente: for (inicializacion; condicion o comparacion; incremento) { instrucciones }

for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("Numero par", i);
  }
}

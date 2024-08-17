//! nos permitira indicarle al codigo explicita que hacer dependiendo del valor de una variable

let accion = "listars";

switch (accion) {
  case "listar":
    console.log("accion de listar");
    break;
  case "agregar":
    console.log("accion de agregar");
    break;
  default:
    console.log("accion no reconocida");
}

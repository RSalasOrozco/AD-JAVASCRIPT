//! else cosiste en un condicional que solo se ejecuta si la condicion es falsa o no se cumple el if inicial

let edad = 18;
if (edad >= 18) {
  console.log("Usuario mayor de edad");
} else if (edad > 13) {
  console.log("Usuario necesita estar acompañado de sus padres");
} else {
  console.log("Usuario menor de edad y no puede ingresar");
}

//! for in nos sirve para iterar las propiedades de un objeto

let user = {
  id: 1,
  name: "Hammit Altintop Saglam",
  age: 59,
  estatura: 1.75,
  genero: "masculino",
  nacionalidad: "estadounidense"
};
for (const prop in user) {
  console.log(prop, user[prop]);
}

var database = require("../database.js");

var dados = [
  {
    nome: "call of duty 2",
    preco: 60.5,
  },
  {
    nome: "GTA",
    preco: 60.5,
  },
  {
    nome: "CS2",
    preco: 97,
  },
];

var query = database
  .insert(dados)
  .into("games")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

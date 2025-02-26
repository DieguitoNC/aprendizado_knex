var database = require("../database.js");

database
  .insert({ nome: "Mists of noyah", preco: 25 })
  .into("games")
  .then((data) => {
    database
      .select("id", "preco")
      .table("games")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

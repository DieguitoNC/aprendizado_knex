var database = require("../database.js");

database

  .select()

  .whereRaw("nome = 'Mists of Noyah' OR preco > 120")

  .table("games")

  .then((data) => {

    console.log(data);

  })

  .catch((err) => {

    console.log(err);

  });
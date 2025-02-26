var database = require("../database.js");

database.select().table("games").orderBy("nome","desc").then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
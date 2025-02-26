var database = require("../database.js");

database.insert({
  nome: "Blizzard",
  game_id: "5"
}).table("estudios").then(data => {
  console.log(data)
}).catch(err =>{
  console.log(err)
})
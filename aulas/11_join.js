var database = require("../database.js");

database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data =>{
  console.log(data)
}).catch(err =>{
  console.log(err)
})
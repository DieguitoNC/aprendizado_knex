var database = require("../database.js");

database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data =>{
  var estudiosGamesArray = data
  var game = {
    id: 0,
    nome: "",
    estudios: []
  }
  game.id = data[0].id
  game.nome = data[0].nome

  data.forEach(estudio => {
    game.estudios.push({nome: estudio.estudio_nome})
  })

  console.log(game)
}).catch(err =>{
  console.log(err)
})
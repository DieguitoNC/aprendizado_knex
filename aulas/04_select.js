var database = require("../database.js");

database.select("id","preco").table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

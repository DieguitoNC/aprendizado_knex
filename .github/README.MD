## Configurando Node
```
npm init -y // tira as questoes iniciais que ele pergunta !
```
## Baixando KNEX
```
npm install knex --save
```
## Baixando o banco de dados escolhido
- Mysql 2 é mais recente !
```
npm install mysql2
```

## Arquivos
### database.js
- Criacao do arquivo que há a configuracao dos dados da database
### index.js 
- Arquivo de exemplo utilizado para fazer as alteracoes no banco de dados 


## Insert
```
var database = require("./database.js");

  

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
```
- Nesse exemplo coloquei junto com JSON para ficar mais intuitivo o aprendizado !

## Select
```
database.select("id","preco").table("games").then(data => {

    console.log(data)

}).catch(err => {

    console.log(err)

})
```
- No primeiro select, temos as colunas que desejamos identificar !
## Nested Queries
- Possibilidade de executar de uma vez os dados, tem que ser utilizado com Async / Await !
```
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
```
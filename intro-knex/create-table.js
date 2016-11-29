const knex = require("./db");

"use strict";

const foo = require("./db.js");

foo.schema.createTable("convidado", (table) => {
    table.increments("idconvidado");
    table.string("nomeconvidado");
}).then(()=> {
    console.log("tabela criada");
    process.exit(0);
}).catch((err)=>{
    console.log(err);
    process.exit(1);
});


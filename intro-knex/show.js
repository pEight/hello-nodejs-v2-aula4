const knex = require("./db.js");

knex("convidado").select().then((ret) => {
    let i = ret.length;
    while(i--) {
        console.log(`Nome: ${ret[i].nomeconvidado} \t\t Id: ${ret[i].idconvidado}`);
    }
    process.exit(0);
})
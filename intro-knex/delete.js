const knex = require("./db.js");

if(!process.argv[2]) {
    console.log("ID não inserido!");
    process.exit(0);
}

let id = process.argv[2];

knex("convidado").del().where({
    idconvidado: id
}).then(()=> {
    console.log(`Convidado de id ${id} foi removido`);
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
});
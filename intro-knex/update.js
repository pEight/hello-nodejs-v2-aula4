const knex = require("./db.js");

if(!process.argv[3]) {
    console.log("ID não inserido!");
    process.exit(0);
}

let [id, nome] = [process.argv[3], process.argv[2]];

knex("convidado").update({
    nomeconvidado: nome
}).where({
    idconvidado: id
}).then(() => {
    console.log(`Id ${id} renomeado para ${nome}`);
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
});
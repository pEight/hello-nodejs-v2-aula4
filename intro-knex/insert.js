const knex = require("./db");

if(!process.argv[3]) {
    console.log("Não foi inserido um ID");
    process.exit(0);
}

let [id, nome] = [process.argv[3], process.argv[2]];

knex("convidado").insert({
    idconvidado: id,
    nomeconvidado: nome
}).then(() => {
    console.log("Convidado registrado");
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
});

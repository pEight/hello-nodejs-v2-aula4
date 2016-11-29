const knexfile = require("./knexfile")["development"];
const knex = require("knex")(knexfile);

if(!process.argv[3]) {
    console.log("Id não inserido");
    process.exit(0);
}

let [id, nome] = [process.argv[3], process.argv[2]];

knex("cachorro").insert({
    idcachorro: id,
    nomecachorro: nome
}).then(() => {
    console.log(`${nome} de id ${id} inserido na tabela`);
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
})
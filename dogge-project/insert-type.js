const knexfile = require("./knexfile")["development"];
const knex = require("knex")(knexfile);

if(!process.argv[3]) {
    console.log("ID não inserido!");
    process.exit(0);
}

let [id, marca] = [process.argv[3], process.argv[2]];

knex("cachorro").where({
    idcachorro: id,
}).whereNull(
    "marcacachorro"
).update({
    marcacachorro: marca,
}).then(() => {
    console.log(`Marca ${marca} inserida no cachorro de id ${id}`);
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
});
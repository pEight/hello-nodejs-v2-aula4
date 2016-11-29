
exports.up = function(knex, Promise) {
  return knex("cachorro").insert([{idcachorro: 1, nomecachorro: "atena"}, {idcachorro: 2, nomecachorro: "ringo"}]);
};

exports.down = function(knex, Promise) {
  return knex("cachorro").del().where({idcachorro: 1}).orWhere({idcachorro: 2});
};

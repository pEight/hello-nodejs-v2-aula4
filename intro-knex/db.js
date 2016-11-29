const foo = require("knex")({
    client: 'sqlite3',
    connection: {
        filename: './bd/teste.sqlite'
    },
    useNullAsDefault: true
});

module.exports = foo;
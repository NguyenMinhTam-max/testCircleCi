
module.exports = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'sakila'
    },
    pool: { min: 0, max: 500 }
});
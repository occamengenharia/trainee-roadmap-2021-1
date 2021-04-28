const path = require('path');

const knex = require('knex')({
  client: 'sqlite3',
  connection: () => ({
    filename: path.resolve(__dirname, 'data.sqlite')
  }),
  useNullAsDefault: true
});

module.exports = knex;
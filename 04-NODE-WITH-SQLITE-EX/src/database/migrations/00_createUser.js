const up = (knex) => {
  return knex
  .schema
  .createTable('users', table => {
    table.increments('id').primary();
    table.string('name', 50).notNullable;
    table.string('phone').notNullable;
    table.string('email').notNullable;
  })
}

const down = (knex) => {
  return knex
  .schema
  .dropTable('users');
}

module.exports = { up, down }
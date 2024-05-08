const User = require('../models/User');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  const tables = ['organizations','users','programs','comments','recommends'];
  for (const table of tables) {
    await knex(table).del();
  }

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'); //resets the incrementing id to 1

};

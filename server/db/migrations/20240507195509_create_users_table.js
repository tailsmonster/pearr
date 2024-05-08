/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("users", (table) => {
  table.increments("id").primary();
  table.string("username").notNullable().unique();
  table.string("password_hash").notNullable();
  table.string("pfp_url");
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');

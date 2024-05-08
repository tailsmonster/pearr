/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("organizations", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable().unique();
    table.string("password_hash").notNullable();
    table.string("pfp_url").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('organizations');
};

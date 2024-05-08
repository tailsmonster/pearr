/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("recommends", (table) => {
    table.increments("id").primary();
    table.integer("program_id");
    table.foreign('program_id').references("id").inTable("programs");
    table.integer("user_id");
    table.foreign('user_id').references("id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('recommends');
};

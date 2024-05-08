/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("comments", (table) => {
  table.increments("id").primary();
  table.integer("program_id");
  table.foreign('program_id').references("id").inTable("programs");
  table.integer("user_id");
  table.foreign('user_id').references("id").inTable("users");
  table.string("body").notNullable();
  table.date("date").notNullable();
  table.boolean('edited');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('comments');

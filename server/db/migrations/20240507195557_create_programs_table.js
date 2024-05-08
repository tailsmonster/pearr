/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("programs", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("bio").notNullable();
    table.integer("organization_id");
    table.foreign('organization_id').references('id').inTable('organizations');
    table.string("img_url").notNullable();
    table.string("color").notNullable();
    table.double("rating");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('programs');
};

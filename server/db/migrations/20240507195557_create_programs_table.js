/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("programs", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.text("bio").notNullable();
    table.string("website_url").notNullable().unique();
    table.string("borough").notNullable();
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
exports.down = function (knex) {
  return knex.schema.dropTable('programs');
};

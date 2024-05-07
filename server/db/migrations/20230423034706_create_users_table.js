/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema
    .createTable("organizations", (table) => {
      table.increments('id').primary();
      table.string("username").notNullable().unique();
      table.string("password_hash").notNullable();
      table.string("pfp_url");
      table.string("website_url").notNullable().unique();
      table.string("borough").notNullable();
    })
    .createTable("users", (table) => {
      table.increments('id').primary();
      table.string("username").notNullable().unique();
      table.string("password_hash").notNullable();
      table.string("pfp_url");
    })
    .createTable("programs", (table) => {
      table.increments('id').primary();
      table.string("name").notNullable();
      table.string("bio").notNullable();
      table.integer("organization_id").references('id').inTable("organizations");
      table.string("img_url").notNullable();
      table.string("color").notNullable();
      table.double("rating");
    })
    .createTable("comments", (table) => {
      table.increments('id').primary();
      table.integer("program_id").references("id").inTable("programs");
      table.integer("user_id").references("id").inTable("users");
      table.string("body").notNullable();
      table.date("date").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) =>
  knex.schema
    .dropTable("users")
    .dropTable("organizations")
    .dropTable("programs")
    .dropTable("comments");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("job", (table) => {
        table.increments("job_id").primary();
        table.string("position_title").notNullable();
        table.string("company_name", null).notNullable();
        table.integer("salary", null);
        table.date("date").notNullable();
        table.string("link", 2000);
        table.string("type");
        table.string("notes",2000);
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("job");
};

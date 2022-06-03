/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("interaction", (table) => {
        table.increments("interaction_id").primary();
        table.date("date").notNullable();
        table.string("contact_name");
        table.string("contact_position");
        table.string("contact_mode");
        table.string("summary");
        table
        .integer("job_id")
        .nullable()
        .references("job_id")
        .inTable("job")
        .onDelete("CASCADE");
        table
        .integer("interaction_list_id")
        .notNullable()
        .references("interaction_list_id")
        .inTable("interaction_list")
        .onDelete("CASCADE");
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("interaction");
};

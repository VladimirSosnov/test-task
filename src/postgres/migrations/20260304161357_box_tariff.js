/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
    return  await knex.schema.createTable("box_tariffs", (table) => {
    table.increments("id").primary();

    table.string("date").notNullable();

    table.string("dt_next_box");
    table.string("dt_till_max");

    table.string("warehouse_name").notNullable();
    table.string("geo_name").notNullable();

    table.decimal("box_delivery_base", 10, 4);
    table.decimal("box_delivery_coef_expr", 10, 4);
    table.decimal("box_delivery_liter", 10, 4);

    table.decimal("box_delivery_marketplace_base", 10, 4);
    table.decimal("box_delivery_marketplace_coef_expr", 10, 4);
    table.decimal("box_delivery_marketplace_liter", 10, 4);

    table.decimal("box_storage_base", 10, 4);
    table.decimal("box_storage_coef_expr", 10, 4);
    table.decimal("box_storage_liter", 10, 4);

    table.unique(["warehouse_name"]);
  });
};

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
    return  await knex.schema.dropTable("box_tariffs");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('destination_category', function (table) {
		table.increments('cat_id').primary();
		table.string('cat_name', 255).notNullable();
		table.integer('cat_parent_id').nullable();
		table.foreign('cat_parent_id').references('destination_category.cat_id').onDelete('CASCADE').onUpdate('CASCADE');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('destination_category');
};

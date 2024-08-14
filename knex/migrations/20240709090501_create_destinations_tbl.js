/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable('destinations', function(table){
		table.increments('dest_id').primary();
		table.string('dest_name').notNullable();
		table.string('dest_location').notNullable();
		table.text('dest_description');
		table.string('dest_map_location').notNullable();
		table.integer('dest_category').notNullable();
		table.string('dest_duration');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})  
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('destinations')
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('media_info', function(table){
  	table.increments('media_id').primary();
  	table.uuid('media_owner').notNullable();
  	table.string('media_fileId').notNullable();
  	table.string('media_url').notNullable();
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  	table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema.dropTable('media_info')
}

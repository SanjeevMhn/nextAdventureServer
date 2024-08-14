/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable('banner_media',function(table){
  	table.uuid('banner_uuid').defaultTo(knex.fn.uuid());
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('banner_media', function(table){
  	table.dropColumn('banner_uuid')
  })
}

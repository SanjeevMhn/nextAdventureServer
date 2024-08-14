/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable('destinations',function(table){
  	table.uuid('dest_uuid').defaultTo(knex.fn.uuid());
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('destinations',function(table){
  	table.dropColumn('dest_uuid')
  })
}

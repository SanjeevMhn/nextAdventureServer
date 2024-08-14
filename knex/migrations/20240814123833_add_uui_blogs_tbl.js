/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable('blogs',function(table){
  	table.uuid('blog_uuid').defaultTo(knex.fn.uuid());
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('blogs',function(table){
  	table.dropColumn('blog_uuid');
  })
}

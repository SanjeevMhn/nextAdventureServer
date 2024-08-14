/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
 return knex.schema.createTable('blogs', function(table){
 	table.increments('blog_id').primary();
 	table.string('blog_title').notNullable();
 	table.text('blog_content').notNullable();
 	table.timestamp('created_at').defaultTo(knex.fn.now());
 	table.timestamp('updated_at').defaultTo(knex.fn.now());
 }) 
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('blogs');
}

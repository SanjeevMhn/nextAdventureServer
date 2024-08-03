/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('destination_category').del()
  await knex('destination_category').insert([
    {
      'cat_name': 'cultural',
      'cat_parent_id': null,
    },
    {
      'cat_name': 'natural',
      'cat_parent_id': null,
    },
    {
      'cat_name': 'urban',
      'cat_parent_id': null,
    },
    {
      'cat_name': 'adventure',
      'cat_parent_id': null,
    },
    {
      'cat_name': 'religious',
      'cat_parent_id': null,
    },
    {
      'cat_name': 'rural',
      'cat_parent_id': null,
    },
    {
      'cat_name': 'event',
      'cat_parent_id': null,
    },
  ]);
};
